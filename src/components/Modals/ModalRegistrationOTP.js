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
import ModalRegistrationEmail from "./ModalRegistrationEmail";

const ModalRegistrationOTP = (props) =>{
    const [disabledBtn, setDisabledBtn] = useState(true)

    const validate = values =>{
        const errors = {}

        if (!values.otp) {
            errors.otp = 'Заполните поле';
        }

        let dis = values.otp.length !== 0 &&
            Object.keys(errors).length == 0
        setDisabledBtn(!dis)

        return errors
    }

    const formik = useFormik({
        initialValues: {
            otp: ''
        },
        validate,
        validateOnBlur: true,
        onSubmit: values => {
            props.registrationOTP(props.email, values.otp)
        }
    })

    return(
        <div className={classes.inner}>
            <div>
                <h2 className ={classes.titleAuth}>Введите код!</h2>
                <div className={classes.info}>На Вашу почту было отправленно письмо с кодом для подтверждения.</div>
            </div>
            <form onSubmit={formik.handleSubmit}>
                <div className="p-field">
                    <div className={`p-field ${classes.column}`}>
                        <label htmlFor="otp" className={classes.titleForms}>Code</label>
                        <InputText id="otp" type="text"
                                   className={formik.errors.otp ? "p-invalid": ''}
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.otp}
                        />
                        {formik.errors.otp ?  <small id="username2-help" className="p-invalid p-d-block">{formik.errors.otp}!</small> : null}
                    </div>
                </div>
                <Button type="submit" disabled={disabledBtn} label="Отправить код" className={`p-button-rounded ${classes.btn} ${classes.btnLogin} ${classes.btnRegistration}`} />
            </form>
        </div>
    )
}

export default ModalRegistrationOTP;