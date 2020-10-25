import React, {useState} from "react"
import classes from "./ModalRegistration.module.css"
import {InputText} from "primereact/inputtext";
import {Password} from "primereact/password";
import {Checkbox} from "primereact/checkbox";
import {Button} from "primereact/button";
import showIco from "./icons/show.svg";
import {useFormik} from "formik";
import {connect} from "react-redux";
import {registration, registrationEmail, registrationOTP, setUserFinal} from "../../redux/registration-reducer";

const ModalRegistrationEmail = (props) =>{
    const [disabledBtn, setDisabledBtn] = useState(true)

    const validate = values =>{
        const errors = {}

        if (!values.email) {
            errors.email = 'Заполните поле';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Неправильный email';
        }

        let dis = values.email.length !== 0 &&
            Object.keys(errors).length == 0
        setDisabledBtn(!dis)

        return errors
    }

    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validate,
        validateOnBlur: true,
        onSubmit: values => {
            console.log(props)
            props.registrationEmail(values.email)
        }
    })

    return(
        <div className={classes.inner}>
            <div>
                <h2 className={classes.titleAuth}>Введите Email!</h2>
                <div className={classes.info}>Мы должны убедиться, что Ваш email действителен и не зарегистрирован.</div>
            </div>
            <form onSubmit={formik.handleSubmit}>
                <div className="p-field">
                    <div className={`p-field ${classes.column}`}>
                        <label htmlFor="email" className={classes.titleForms}>Email</label>
                        <InputText id="email" type="text"
                                   className={formik.errors.email ? "p-invalid": ''}
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.email}
                        />
                        {formik.errors.email ?  <small id="username2-help" className="p-invalid p-d-block">{formik.errors.email}!</small> : null}
                    </div>
                </div>
                <Button type="submit" disabled={disabledBtn} label="Отправить Email" className={`p-button-rounded ${classes.btn} ${classes.btnLogin} ${classes.btnRegistration}`} />
            </form>
        </div>
    )
}

export default  ModalRegistrationEmail;