import { useEffect, useState } from 'react'
import InputMask from 'react-input-mask'
import * as Yup from 'yup'

import trash from '../../assets/images/trash.png'

import { useCart } from '../../Utils'

import * as S from './styles'
import { usePurchaseMutation } from '../../services/api'
import { useFormik } from 'formik'

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    isCartVisible,
    toggleCartVisibility,
    clearCart
  } = useCart()

  const [buy, setBuy] = useState(false)
  const [payments, setPayments] = useState(false)
  const [end, setEnd] = useState(false)
  const [purchase, { data }] = usePurchaseMutation()
  const [restaurant, setRestaurant] = useState<Food[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data) => {
        setRestaurant(data)
      })
      .catch((error) => {
        console.error('Erro ao carregar dados:', error)
      })
  }, [])

  const calcularTotalPedido = () => {
    return cartItems.reduce((total, dish) => total + dish.preco, 0)
  }

  const deliverySection = () => {
    setBuy(!buy)
  }

  const comeBackDelivery = () => {
    setPayments(!payments)
  }

  const comeBackHome = () => {
    clearCart()
    setBuy(false)
    setPayments(false)
    setEnd(false)
    toggleCartVisibility()
  }

  const form = useFormik({
    initialValues: {
      name: '',
      address: '',
      city: '',
      cep: '',
      houseNumber: '',
      complement: '',
      cardName: 'lucas',
      cardNumber: '1111111111111111',
      cvv: '123',
      expiresMonth: '12',
      expiresYear: '12'
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),

      address: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),

      city: Yup.string()
        .min(5, 'O campo precisa ter 14 caracteres')
        .required('O campo é obrigatório'),

      cep: Yup.string()
        .min(9, 'O campo precisa ter 8 caracteres')
        .required('O campo é obrigatório'),

      houseNumber: Yup.string()
        .min(2, 'O nome precisa ter pelo menos 2 caracteres')
        .required('O campo é obrigatório'),

      complement: Yup.string().min(0)
    }),
    onSubmit: (values) => {
      purchase({
        products: restaurant.map((data) => ({
          id: data.cardapio.id,
          price: data.cardapio.preco
        })),
        delivery: {
          receiver: values.name,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: values.houseNumber,
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: values.cvv,
            expires: {
              month: values.expiresMonth,
              year: values.expiresYear
            }
          }
        }
      })
      setPayments(true)
    }
  })

  const form_two = useFormik({
    initialValues: {
      name: '',
      address: '',
      city: '',
      cep: '',
      houseNumber: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cvv: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      cardName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),

      cardNumber: Yup.string()
        .min(19, 'O campo precisa ter 16 caracteres')
        .max(19, 'O campo precisa ter 16 caracteres')
        .required('O campo é obrigatório'),

      cvv: Yup.string()
        .min(3, 'O campo precisa ter 3 caracteres')
        .max(3, 'O campo precisa ter 3 caracteres')
        .required('O campo é obrigatório'),

      expiresMonth: Yup.string()
        .min(2, 'O campo precisa ter 2 caracteres')
        .max(2, 'O campo precisa ter 2 caracteres')
        .required('O campo é obrigatório'),

      expiresYear: Yup.string()
        .min(2, 'O campo precisa ter 2 caracteres')
        .max(2, 'O campo precisa ter 2 caracteres')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        products: [
          {
            id: 1,
            price: 0
          }
        ],
        delivery: {
          receiver: values.name,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: values.houseNumber,
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: values.cvv,
            expires: {
              month: values.expiresMonth,
              year: values.expiresYear
            }
          }
        }
      })
      setEnd(true)
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    const hasError = isTouched && isInvalid

    return hasError
  }

  const checkInputHasError_two = (fieldName: string) => {
    const isTouched = fieldName in form_two.touched
    const isInvalid = fieldName in form_two.errors

    const hasError = isTouched && isInvalid

    return hasError
  }

  if (!isCartVisible) return null

  return (
    <S.Container>
      <S.Overlay onClick={toggleCartVisibility}>
        <S.SideBar onClick={(e) => e.stopPropagation()}>
          {cartItems.length > 0 && !buy ? (
            <ul>
              {cartItems.map((dish) => (
                <li key={dish.id}>
                  <S.Dishes>
                    <S.DishesImage>
                      <img src={dish.foto} alt={dish.nome} />
                    </S.DishesImage>
                    <S.Info>
                      <S.Title>{dish.nome}</S.Title>
                      <S.Price>R$ {dish.preco}</S.Price>
                    </S.Info>
                    <S.TrashButton onClick={() => removeFromCart(dish.id)}>
                      <img src={trash} alt="Excluir" />
                    </S.TrashButton>
                  </S.Dishes>
                </li>
              ))}
              <S.TotalPrice>
                <p>Valor total:</p>{' '}
                <span>R$ {calcularTotalPedido().toFixed(2)}</span>
              </S.TotalPrice>
              <S.Button onClick={deliverySection}>
                Continuar com a entrega
              </S.Button>
            </ul>
          ) : (
            <>
              {buy && !payments ? (
                <>
                  <S.DeliveyTitle>Entregar</S.DeliveyTitle>
                  <form onSubmit={form.handleSubmit}>
                    <label htmlFor="name">Seu nome completo</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={form.values.name}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('name') ? 'error' : ''}
                    />
                    {form.errors.address && form.touched.address && (
                      <p>{form.errors.address}</p>
                    )}

                    <label htmlFor="address">Endereço</label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      value={form.values.address}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('address') ? 'error' : ''}
                    />
                    {form.errors.address && form.touched.address && (
                      <p>{form.errors.address}</p>
                    )}

                    <label htmlFor="city">Cidade</label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      value={form.values.city}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('city') ? 'error' : ''}
                    />
                    {form.errors.city && form.touched.city && (
                      <p>{form.errors.city}</p>
                    )}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column'
                        }}
                      >
                        <label htmlFor="cep">Cep</label>
                        <input
                          type="text"
                          name="cep"
                          id="cep"
                          value={form.values.cep}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={checkInputHasError('cep') ? 'error' : ''}
                        />
                        {form.errors.cep && form.touched.cep && (
                          <p>{form.errors.cep}</p>
                        )}
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column'
                        }}
                      >
                        <label htmlFor="houseNumber">Número</label>
                        <input
                          type="text"
                          name="houseNumber"
                          id="houseNumber"
                          minLength={1}
                          value={form.values.houseNumber}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('houseNumber') ? 'error' : ''
                          }
                        />
                        {form.errors.houseNumber &&
                          form.touched.houseNumber && (
                            <p>{form.errors.houseNumber}</p>
                          )}
                      </div>
                    </div>
                    <label htmlFor="complement">Complemento (opcional)</label>
                    <input
                      type="text"
                      name="complement"
                      id="complement"
                      value={form.values.complement}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('complement') ? 'error' : ''
                      }
                    />
                    {form.errors.complement && form.touched.complement && (
                      <p>{form.errors.complement}</p>
                    )}
                    <S.DuoButton type="submit">
                      Continuar com o pagamento
                    </S.DuoButton>
                  </form>
                  <S.Button onClick={deliverySection}>Voltar</S.Button>
                </>
              ) : (
                <>
                  {payments && !end ? (
                    <>
                      <div
                        style={{
                          display: 'flex'
                        }}
                      >
                        <S.DeliveyTitle>
                          Pagamento - Valor a pagar{' '}
                          <span>R$ {calcularTotalPedido().toFixed(2)}</span>
                        </S.DeliveyTitle>
                      </div>
                      <form onSubmit={form_two.handleSubmit}>
                        <label htmlFor="cardName">Nome do cartão</label>
                        <input
                          type="text"
                          name="cardName"
                          id="cardName"
                          value={form_two.values.cardName}
                          onChange={form_two.handleChange}
                          onBlur={form_two.handleBlur}
                          className={
                            checkInputHasError_two('cardName') ? 'error' : ''
                          }
                        />
                        {form_two.errors.cardName &&
                          form_two.touched.cardName && (
                            <p>{form_two.errors.cardName}</p>
                          )}
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                          }}
                        >
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column'
                            }}
                          >
                            <label htmlFor="cardNumber">Número do cartão</label>
                            <InputMask
                              type="text"
                              name="cardNumber"
                              id="cardNumber"
                              mask="9999 9999 9999 9999"
                              value={form_two.values.cardNumber}
                              onChange={form_two.handleChange}
                              onBlur={form_two.handleBlur}
                              className={
                                checkInputHasError_two('cardNumber')
                                  ? 'error'
                                  : ''
                              }
                            />
                            {form_two.errors.cardNumber &&
                              form_two.touched.cardNumber && (
                                <p>{form_two.errors.cardNumber}</p>
                              )}
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column'
                            }}
                          >
                            <label htmlFor="cvv">CVV</label>
                            <InputMask
                              type="text"
                              name="cvv"
                              id="cvv"
                              mask="999"
                              value={form_two.values.cvv}
                              onChange={form_two.handleChange}
                              onBlur={form_two.handleBlur}
                              className={
                                checkInputHasError_two('cvv') ? 'error' : ''
                              }
                            />
                            {form_two.errors.cvv && form_two.touched.cvv && (
                              <p>{form_two.errors.cvv}</p>
                            )}
                          </div>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                          }}
                        >
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column'
                            }}
                          >
                            <label htmlFor="expiresMonth">
                              Mês de vencimento
                            </label>
                            <InputMask
                              type="text"
                              name="expiresMonth"
                              id="expiresMonth"
                              mask="99"
                              value={form_two.values.expiresMonth}
                              onChange={form_two.handleChange}
                              onBlur={form_two.handleBlur}
                              className={
                                checkInputHasError_two('expiresMonth')
                                  ? 'error'
                                  : ''
                              }
                            />
                            {form_two.errors.expiresMonth &&
                              form_two.touched.expiresMonth && (
                                <p>{form_two.errors.expiresMonth}</p>
                              )}
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column'
                            }}
                          >
                            <label htmlFor="expiresYear">
                              Ano de vencimento
                            </label>
                            <InputMask
                              type="text"
                              name="expiresYear"
                              id="expiresYear"
                              mask="99"
                              value={form_two.values.expiresYear}
                              onChange={form_two.handleChange}
                              onBlur={form_two.handleBlur}
                              className={
                                checkInputHasError_two('expiresYear')
                                  ? 'error'
                                  : ''
                              }
                            />
                            {form_two.errors.expiresYear &&
                              form_two.touched.expiresYear && (
                                <p>{form_two.errors.expiresYear}</p>
                              )}
                          </div>
                        </div>
                        <S.DuoButton type="submit">
                          Finalizar pedido
                        </S.DuoButton>
                      </form>
                      <S.Button onClick={comeBackDelivery}>Voltar</S.Button>
                    </>
                  ) : (
                    <>
                      {end ? (
                        <>
                          <div>
                            <S.DeliveyTitle>
                              Pedido realizado - {data?.orderId}
                            </S.DeliveyTitle>
                            <S.Phase>
                              Estamos felizes em informar que seu pedido já está
                              em processo de preparação e, em breve, será
                              entregue no endereço fornecido.
                            </S.Phase>
                            <br />
                            <S.Phase>
                              Gostaríamos de ressaltar que nossos entregadores
                              não estão autorizados a realizar cobranças extras.
                            </S.Phase>
                            <br />
                            <S.Phase>
                              Lembre-se da importância de higienizar as mãos
                              após o recebimento do pedido, garantindo assim sua
                              segurança e bem-estar durante a refeição.
                            </S.Phase>
                            <br />
                            <S.Phase>
                              Esperamos que desfrute de uma deliciosa e
                              agradável experiência gastronômica. Bom apetite!
                            </S.Phase>
                            <S.Button onClick={comeBackHome}>Concluir</S.Button>
                          </div>
                        </>
                      ) : (
                        <S.Alert>O carrinho está vazio :(</S.Alert>
                      )}
                    </>
                  )}
                </>
              )}
            </>
          )}
        </S.SideBar>
      </S.Overlay>
    </S.Container>
  )
}

export default Cart
