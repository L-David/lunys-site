import { useState } from "react";
import { Formik } from "formik";
import { useToasts } from "react-toast-notifications";
import * as Yup from 'yup';

interface FormValues {
  phone: string;
}

const VALIDATION_FORM = Yup.object({
  phone: Yup.string().trim().required('Este campo es obligatorio'),
});

export default function Form() {
  const [form] = useState({ phone: '' });
  const [loading, setLoading] = useState(false);
  const { addToast } = useToasts();

  const onSubmit = (values: FormValues) => {
    setLoading(true);
    fetch('/api/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then(res => {
        setLoading(false);
        if (res.status === 201 || res.status === 200) {
          addToast(
            'Tu mensaje ha sido enviado correctamente, enseguida nos pondremos en contacto.',
            {
              appearance: 'success',
              autoDismiss: true,
              autoDismissTimeout: 8000,
            }
          );
        }
      })
      .catch(error => {
        setLoading(false);
        console.error('[send] Error send: ', error);
        addToast(
          'Desafortunadamente no se pudo enviar tu mensaje, favor de intentar más tarde.',
          {
            appearance: 'warning',
            autoDismiss: true,
            autoDismissTimeout: 8000,
          }
        );
      });
  };

  return (
    <Formik
      initialValues={form}
      onSubmit={values => onSubmit(values)}
      validationSchema={VALIDATION_FORM}
    >
      {({ errors, handleChange, handleSubmit }) => (
        <div className="form">
          <div className="row">
            <h3>Qué te parece si te llamamos!</h3>
          </div>
          <div className="row">
            <div className="left-content">
              <p>Pásame tu número</p>
              <input
                type="tel"
                placeholder="El número aquí"
                name="phone"
                id="phone"
                onChange={handleChange('phone')}
              />
              {errors.phone && <div className="error-message">{errors.phone}</div>}
              <div className="content-button">
                <button type="button" onClick={() => handleSubmit()} disabled={loading}>
                  {loading && (
                    <div className="loading">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  )}
                  <span>Llama me!</span>
                </button>
              </div>
            </div>
            <div className="right-content">
              <img src="/logo-gray.svg" alt="Lunys Pastelería" />
            </div>
          </div>
        </div>
      )}
    </Formik>
  )
};