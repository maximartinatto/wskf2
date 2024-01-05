import { useState } from "react";
import styles from "./Contacto.module.css";
import axios from "axios";

const Contacto = () => {
    const [formStatus, setFormStatus] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(
                "https://formspree.io/f/xknlnpvr",
                formData,
                { headers: { Accept: "application/json" } }
            );
            if (response.status === 200) {
                setFormStatus("success");
                setFormData({ name: "", email: "", message: "", });
                console.log("El formulario se ha enviado correctamente")
            }
        } catch (error) {
            setFormStatus("error");
            console.error("No se pudo enviar el formulario", error);
        }
    }
    return (
        <div className={styles["containerContact"]}>
            <h1 className={styles["titleContact"]}>Ponte en contacto</h1>
            <div className={styles["formLinks"]}>
                <div className={styles["linksContact"]}>
                    <div className={styles["contactDetails"]}>
                        <h1>Contacto</h1>
                        <div className={styles["phone1"]}>
                            <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA6klEQVR4nO2UrQrCYBSGH7TbBGHBoFehUS/AYBYvQZNeik2wKOwSFOwGiwNBtApWFQ06J4MzGPJN2HaW9IWT9vE+nJ+98FdMNYED4AEusAIqKGov5uGaagKOBoCjCVgaAGdNwMgAcIG8FqBrACxQVAG4hcy3QAll2WLuX1SRDFQHXrJci4w0ky7srABl4CqQflaQlpyoX+0v73JpIEPp4gn0Pr75BzAP7cuRWKnGhQyki2AnlphvDP+MJwGZaFyXUHSYQjGoBwllARMZSZR5MM5Uqsmo7hEAvzu1WOkAY2ANnIAd0NAC8Bt6A9vPYU+qAWblAAAAAElFTkSuQmCC"
                                alt="phone"
                            />
                            <h2>+54 9 3462 620996</h2>
                        </div>

                        <div className={styles["emailContact"]}>
                            <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAwklEQVR4nO3UPW7CQBCG4Ueki0SK1HAKLoGVK6TOFbgCZdrcIgXHcMMV7Ig+RTqiRUiDROHEazDChUf6it2Z+d790zLGkOIFX0hXqkbRBKh7ME+hqglwSm6xu8B0F72n8Z+AZ0zxjn2G8T5qp9HbCthgFnMLlP+Yl1EjejY5gKN+sMIDJnjDd4d8K6BphXN8huYZO8wCJPziA09ntY9Yt9xRNiCdPb3XUJVR3xmQOmoEGN4R1bf+7IqeIBWWTYAx7hMHY+0ch8WLh3kAAAAASUVORK5CYII="
                                alt="email"
                            />
                            <h2>quaranta1936@yahoo.com.ar</h2>
                        </div>
                    </div>
                    <div className={styles["socialContact"]}>
                        <h1>Sigueme</h1>
                        <div className={styles["sociaIcons"]}>
                            <a
                                href="https://www.instagram.com/wskfargentina"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className={styles["svgInsta"]}
                                >
                                    <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles["containerForm"]}>
                    <form onSubmit={handleSubmit}>
                        <h1>Envíame un email</h1>
                        <div className={styles["nameEmail"]}>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className={styles["contactName"]}
                            />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className={styles["contactEmail"]}
                            />
                        </div>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className={styles["contactText"]}
                        ></textarea>
                        <div className={styles["buttonForm"]}>
                            <button type="submit">Enviar</button>
                        </div>
                        <div className={styles["successError"]}>
                            {formStatus === "success" && (
                                <div className={styles["successMessage"]}>
                                    ¡El formulario se ha enviado correctamente!
                                </div>
                            )}
                            {formStatus === "error" && (
                                <div className={styles["errorMessage"]}>
                                    ¡No se pudo enviar el formulario! Por favor, inténtalo de
                                    nuevo.
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default Contacto;