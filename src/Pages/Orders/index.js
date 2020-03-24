import React, { useState, useEffect } from 'react';
import {
  MdSearch,
  MdAdd,
  MdMoreHoriz,
  MdFiberManualRecord,
  MdEdit,
  MdDeleteForever,
  MdInput,
} from 'react-icons/md';
import randomColor from 'randomcolor';
import TableLoader from './loader';

import {
  Container,
  Content,
  AvatarEntregador,
  Status,
  NotFound,
} from './styles';

import api from '~/Services/api';

const colorStatus = (status) => {
  switch (status) {
    case 'ENTREGUE':
      return '#DFF0DF';
    case 'PENDENTE':
      return '#F0F0DF';
    case 'RETIRADA':
      return '#BAD2FF';
    case 'CANCELADA':
      return '#FAB0B0';
    default:
      return '#eee';
  }
};

const colorsAvatar = () => randomColor();

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [colors, setColors] = useState({});
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  async function loadOrders({ productName } = {}) {
    const response = await api.get('orders', {
      params: {
        productName,
      },
    });

    const data = response.data.map((order) => ({
      ...order,
      id: order.id < 10 ? String(`0${order.id}`) : order.id,
      openMenu: false,
    }));
    const colorsData = data.reduce((arr, order) => {
      if (!arr[order.deliveryman.id]) {
        arr[order.deliveryman.id] = colorsAvatar();
      }
      return arr;
    }, {});

    setColors(colorsData);
    setOrders(data);
    setLoading(false);
  }

  useEffect(() => {
    loadOrders();
  }, []);

  function handleOpenMenu(id) {
    setOrders(
      orders.map((order) => {
        if (order.id === id && !order.openMenu) {
          return {
            ...order,
            openMenu: true,
          };
        }
        return {
          ...order,
          openMenu: false,
        };
      })
    );
  }

  function handleSearch(e) {
    const filter = {
      productName: e.target.value,
    };
    if (e.target.value !== null || e.target.value !== '') {
      setSearch(e.target.value);
    }

    if (e.which === 13 || e.keyCode === 13) {
      setLoading(true);
      loadOrders(filter);
    }
  }
  function PageRender() {
    if (loading) {
      return <TableLoader />;
    }

    if (!loading && orders.length > 0) {
      return (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Destinatário</th>
              <th>Entregador</th>
              <th>Cidade</th>
              <th>Estado</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={String(order.id)}>
                <td>#{order.id}</td>
                <td>{order.recipient.detail.name}</td>
                <td>
                  <AvatarEntregador color={colors[order.deliveryman.id]}>
                    {order.deliveryman.deliveryman_letters}
                  </AvatarEntregador>
                  {order.deliveryman.name}
                </td>
                <td> {order.recipient.city}</td>
                <td>{order.recipient.state}</td>
                <td>
                  <Status color={colorStatus(order.status_order)}>
                    <MdFiberManualRecord />
                    {order.status_order}
                  </Status>
                </td>
                <td>
                  <MdMoreHoriz
                    size={22}
                    color="#C6C6C6"
                    onClick={() => {
                      handleOpenMenu(order.id);
                    }}
                  />
                  {order.openMenu && (
                    <ul>
                      <li>
                        <MdEdit size={18} color="#4D85EE" /> Editar
                      </li>
                      <li>
                        <MdDeleteForever size={18} color="#DE3B3B" />
                        Excluir
                      </li>
                    </ul>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }

    if (!loading && orders.length === 0) {
      return (
        <NotFound>
          <p>Produto não encontrado</p>
        </NotFound>
      );
    }
  }
  return (
    <Container>
      <Content>
        <h1>Gerenciando encomendas</h1>
        <div>
          <span>
            {search ? (
              <MdInput size={19} color="#999999" />
            ) : (
              <MdSearch size={19} color="#999999" />
            )}

            <input
              type="text"
              placeholder="Buscar por encomendas"
              onKeyUp={handleSearch}
            />
            {search && (
              <small>
                Aperte no Enter para buscar uma encomenda cuja o produto tenha o
                nome: <strong>{search} </strong>
              </small>
            )}
          </span>

          <button type="button">
            <MdAdd size={23} color="#fff" fontWeight="bold" /> CADASTRAR
          </button>
        </div>
        <PageRender />
      </Content>
    </Container>
  );
}
