import React from "react";
import styles from "./Contacto.module.css";


const Contacto = () => {

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
                            <a
                                href="https://www.facebook.com/wskfargentina"
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
                                    className={styles["svgFacebook"]}
                                >
                                    <path d="M 12 2 C 6.48 2 2 6.48 2 12 C 2 16.32 4.53 20.04 8.34 21.38 V 14.69 H 6.05 V 12 h 2.29 V 9.72 c 0 -2.26 1.35 -3.52 3.42 -3.52 c 0.99 0 2.09 0.18 2.09 0.18 v 2.3 h -1.18 c -1.16 0 -1.52 0.72 -1.52 1.46 v 1.76 h 2.58 l -0.41 2.69 h -2.17 v 6.57 c 3.81 -1.34 6.84 -4.75 6.84 -8.88 c 0 -4.68 -3.76 -8.46 -8.4 -8.46 Z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Contacto;