import React, { useState, useEffect } from 'react';
import {
  MdSearch,
  MdAdd,
  MdMoreHoriz,
  MdFiberManualRecord,
  MdEdit,
  MdDeleteForever,
  MdInput,
  MdRemoveRedEye,
} from 'react-icons/md';

import { format, parseISO } from 'date-fns';
import { toast } from 'react-toastify';
import randomColor from 'randomcolor';
import PaginationComponent from '~/Components/Pagination';
import colorStatus from '~/Util/colorStatus';
import TableLoader from './loader';
import { Status, NotFound } from './styles';
import api from '~/Services/api';
import Modal from '~/Components/Modal';
import ColoredAvatar from '~/Components/ColoredAvatar';

export default function Orders() {
  const [dados, setDados] = useState({
    orders: [],
    colors: {},
    search: '',
    pagination: {},
    modal: {},
    loading: false,
  });
  // const [orders, setOrders] = useState([]);
  // const [colors, setColors] = useState({});
  // const [search, setSearch] = useState('');
  // const [pagination, setPagination] = useState({});
  // const [loading, setLoading] = useState(true);

  async function loadOrders(productName = null, page = 1) {
    const response = await api.get('orders', {
      params: {
        productName,
        page,
      },
    });

    const data = response.data.nodes.map((order) => ({
      ...order,
      id: order.id < 10 ? String(`0${order.id}`) : order.id,
      openMenu: false,
    }));

    const colorsData = data.reduce((arr, order) => {
      if (!arr[order.deliveryman.id]) {
        arr[order.deliveryman.id] = randomColor();
      }
      return arr;
    }, {});

    if (data.length === 0 && productName) {
      toast.info(`Não existe uma entrega cujo o produto tenha o nome:`);
    }

    setDados({
      pagination: response.data.pagination,
      colors: colorsData,
      orders: data,
      loading: false,
      modal: {},
      search: productName,
    });
  }

  useEffect(() => {
    loadOrders();
  }, []);

  function handleOpenMenu(id) {
    setDados({
      ...dados,
      orders: dados.orders.map((order) => {
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
      }),
    });
  }

  function handleSearch(e) {
    const { currentPage } = dados.pagination;

    if (e.which === 13 || e.keyCode === 13) {
      setDados({
        ...dados,
        loading: true,
      });
      loadOrders(e.target.value, currentPage);
    }
  }

  function handlePageChange(pageNumber) {
    const { currentPage } = dados.pagination;
    if (pageNumber === currentPage) return;
    setDados({
      ...dados,
      loading: true,
    });
    loadOrders(dados.search, pageNumber);
  }

  function handleModal(data) {
    if (Object.keys(dados.modal).length > 0) {
      return setDados({
        ...dados,
        modal: {},
      });
    }
    const newData = {
      ...data,
      start_date:
        data.start_date &&
        format(parseISO(data.start_date), "dd'/'MM'/'yyyy hh:mm"),
      end_date:
        data.end_date &&
        format(parseISO(data.end_date), "dd'/'MM'/'yyyy hh:mm"),
    };
    return setDados({
      ...dados,
      modal: { ...newData },
    });
  }

  // Page Component
  function PageRender() {
    if (dados.loading) {
      return <TableLoader />;
    }

    if (!dados.loading && dados.orders.length > 0) {
      return (
        <section>
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
              {dados.orders.map((order) => (
                <tr key={String(order.id)}>
                  <td>#{order.id}</td>
                  <td>{order.recipient.detail.name}</td>
                  <td>
                    <ColoredAvatar color={dados.colors[order.deliveryman.id]}>
                      {order.deliveryman.deliveryman_letters}
                    </ColoredAvatar>
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
                          <button
                            type="button"
                            onClick={() => {
                              handleOpenMenu(order.id);
                              handleModal(order);
                            }}
                          >
                            <MdRemoveRedEye size={18} color="#8E5BE8" />{' '}
                            Visualizar
                          </button>
                        </li>
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
        </section>
      );
    }

    if (!dados.loading && dados.orders.length === 0) {
      return (
        <NotFound>
          <p>Produto não encontrado</p>
        </NotFound>
      );
    }
  }

  return (
    <>
      {Object.keys(dados.modal).length > 0 && (
        <Modal handleModal={handleModal}>
          <>
            <strong>Informações da encomenda</strong>

            <address>
              {dados.modal.recipient.street}, <br />{' '}
              {dados.modal.recipient.number} {dados.modal.recipient.city} -{' '}
              {dados.modal.recipient.state} <br />{' '}
              {dados.modal.recipient.zip_code}
            </address>

            <hr />
            <strong>Datas</strong>

            <dl>
              <dt>Retirada:</dt>
              <dd> {dados.modal.start_date}</dd>

              <dt>Entrega:</dt>
              <dd>{dados.modal.end_date}</dd>
            </dl>

            <hr />

            <strong>Assinatura do destinatário</strong>
            <img src={dados.modal.signature.url} alt="assinatura" />
          </>
        </Modal>
      )}
      <div>
        <h1>Gerenciando encomendas </h1>
        <section>
          <span>
            {dados.search ? (
              <MdInput size={19} color="#999999" />
            ) : (
              <MdSearch size={19} color="#999999" />
            )}

            <input
              type="text"
              placeholder="Buscar por encomendas"
              onKeyUp={handleSearch}
            />
            {dados.search && (
              <small>
                Aperte no Enter para buscar uma encomenda cuja o produto tenha o
                nome: <strong>{dados.search} </strong>
              </small>
            )}
          </span>

          <button type="button">
            <MdAdd size={23} color="#fff" fontWeight="bold" /> CADASTRAR
          </button>
        </section>
        <PageRender />
        <PaginationComponent
          {...dados.pagination}
          handlePageChange={handlePageChange}
        />
      </div>
    </>
  );
}
