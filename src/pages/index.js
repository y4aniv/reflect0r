import Head from 'next/head'
import styles from "../styles/Index.module.css"
import { useEffect, useRef } from 'react'

export default function Index() {
  useEffect(() => {

    document.getElementsByClassName(styles.ray_1)[0].addEventListener("click", () => {
      document.getElementsByClassName(styles.ray_1)[0].style.opacity = "0.3"
      document.getElementsByClassName(styles.ray_1)[0].style.zIndex = "-100"
    })
    document.getElementsByClassName(styles.ray_2)[0].addEventListener("click", () => {
      document.getElementsByClassName(styles.ray_2)[0].style.opacity = "0.3"
      document.getElementsByClassName(styles.ray_2)[0].style.zIndex = "-100"
      
    })
    document.getElementsByClassName(styles.ray_3)[0].addEventListener("click", () => {
      document.getElementsByClassName(styles.ray_3)[0].style.opacity = "0.3"
      document.getElementsByClassName(styles.ray_3)[0].style.zIndex = "-100"
    })
    document.getElementsByClassName(styles.ray_4)[0].addEventListener("click", () => {
      document.getElementsByClassName(styles.ray_4)[0].style.opacity = "0.3"
      document.getElementsByClassName(styles.ray_4)[0].style.zIndex = "-100"
    })
    document.getElementsByClassName(styles.ray_5)[0].addEventListener("click", () => {
      document.getElementsByClassName(styles.ray_5)[0].style.opacity = "0.3"
      document.getElementsByClassName(styles.ray_5)[0].style.zIndex = "-100"
    })
    document.getElementsByClassName(styles.ray_6)[0].addEventListener("click", () => {
      document.getElementsByClassName(styles.ray_6)[0].style.opacity = "0.3"
      document.getElementsByClassName(styles.ray_6)[0].style.zIndex = "-100"
    })
    document.getElementsByClassName(styles.ray_7)[0].addEventListener("click", () => {
      document.getElementsByClassName(styles.ray_7)[0].style.opacity = "0.3"
      document.getElementsByClassName(styles.ray_7)[0].style.zIndex = "-100"
    })
    document.getElementsByClassName(styles.ray_8)[0].addEventListener("click", () => {
      document.getElementsByClassName(styles.ray_8)[0].style.opacity = "0.3"
      document.getElementsByClassName(styles.ray_8)[0].style.zIndex = "-100"
    })
    document.getElementsByClassName(styles.ray_9)[0].addEventListener("click", () => {
      document.getElementsByClassName(styles.ray_9)[0].style.opacity = "0.3"
      document.getElementsByClassName(styles.ray_9)[0].style.zIndex = "-100"
    })
    document.getElementsByClassName(styles.ray_10)[0].addEventListener("click", () => {
      document.getElementsByClassName(styles.ray_10)[0].style.opacity = "0.3"
      document.getElementsByClassName(styles.ray_10)[0].style.zIndex = "-100"
    })

    document.addEventListener("click", (e) => {
      var img = document.createElement("img");
      img.src = "/user.png";
      img.style.position = "absolute";
      img.style.top = e.clientY + "px";
      img.style.left = e.clientX + "px";
      img.style.width = "25px";
      img.style.height = "25px";
      img.style.transform = "translate(-50%, -50%)";
      img.style.zIndex = "10000"
      document.body.appendChild(img);
    })
  }, [])
  return (
    <>
      <Head>
        <title>reflect0r: MATh.en.JEANS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="favicon.png" />
      </Head>
      <div className={styles.svgApp_container}>
        <svg className={styles.svgApp} viewBox="0 0 1998 818" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M198.611 456.986L423.524 19L823.849 798.579L1224.17 19L1624.5 798.579L1799.91 456.986" stroke="#EF233C" className={styles.ray_1} stroke-width="15" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M198.611 456.986L486.615 19L999.262 798.579L1511.91 19L1799.91 456.986" stroke="#FFC800" className={styles.ray_2} stroke-width="15" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M198.611 456.986L648.437 19L1449.09 798.579L1799.91 456.986" stroke="#00E2AA" className={styles.ray_3} stroke-width="15" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M198.611 456.986L999.262 19L1799.91 456.986" stroke="#32CBFF" stroke-width="15" className={styles.ray_4} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M198.611 456.986L549.437 798.579L1350.09 19L1799.91 456.986" stroke="#00E2AA" stroke-width="15" className={styles.ray_5} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M198.611 456.986L374.024 798.579L774.349 19L1174.67 798.579L1575 19L1799.91 456.986" stroke="#EF233C" className={styles.ray_6} stroke-width="15" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M198.611 456.986L442.555 798.579L999.262 19L1555.97 798.579L1799.91 456.986" stroke="#32CBFF" className={styles.ray_7} stroke-width="15" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M198.611 456.986L999.262 798.579L1799.91 456.986" stroke="#FFC800" className={styles.ray_8} stroke-width="15" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M198.611 456.986L342.498 798.579L670.889 19L999.262 798.579L1327.63 19L1656.03 798.579L1799.91 456.986" stroke="#FFC800" className={styles.ray_9} stroke-width="15" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M198.611 456.986L374.197 19L686.729 798.579L999.262 19L1311.79 798.579L1624.33 19L1799.91 456.986" stroke="#32CBFF" className={styles.ray_10} stroke-width="15" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M1809.52 456.986C1809.52 462.291 1805.22 466.597 1799.91 466.597C1794.61 466.597 1790.3 462.291 1790.3 456.986C1790.3 451.681 1794.61 447.375 1799.91 447.375C1805.22 447.375 1809.52 451.681 1809.52 456.986Z" fill="white" />
          <path d="M208.223 456.986C208.223 462.291 203.919 466.597 198.612 466.597C193.304 466.597 189 462.291 189 456.986C189 451.681 193.304 447.375 198.612 447.375C203.919 447.375 208.223 451.681 208.223 456.986Z" fill="white" />
          <path d="M204.378 456.986C204.378 460.177 201.796 462.753 198.611 462.753C195.425 462.753 192.844 460.177 192.844 456.986C192.844 453.795 195.425 451.22 198.611 451.22C201.796 451.22 204.378 453.795 204.378 456.986Z" fill="white" />
          <path d="M204.68 456.986C204.68 460.177 202.105 462.753 198.913 462.753C195.722 462.753 193.146 460.177 193.146 456.986C193.146 453.795 195.722 451.22 198.913 451.22C202.105 451.22 204.68 453.795 204.68 456.986Z" fill="white" />
          <path d="M204.68 456.986C204.68 460.177 202.105 462.753 198.913 462.753C195.722 462.753 193.146 460.177 193.146 456.986C193.146 453.795 195.722 451.22 198.913 451.22C202.105 451.22 204.68 453.795 204.68 456.986Z" stroke="white" stroke-width="30" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M1805.68 456.986C1805.68 460.177 1803.1 462.753 1799.91 462.753C1796.72 462.753 1794.15 460.177 1794.15 456.986C1794.15 453.795 1796.72 451.22 1799.91 451.22C1803.1 451.22 1805.68 453.795 1805.68 456.986Z" fill="white" />
          <path d="M1805.68 456.986C1805.68 460.177 1803.1 462.753 1799.91 462.753C1796.72 462.753 1794.15 460.177 1794.15 456.986C1794.15 453.795 1796.72 451.22 1799.91 451.22C1803.1 451.22 1805.68 453.795 1805.68 456.986Z" stroke="white" stroke-width="30" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M0 810.5H1997.5" stroke="white" stroke-width="14" />
          <path d="M0 7H1997.5" stroke="white" stroke-width="14" />


        </svg>

      </div>
    </>
  )
}
