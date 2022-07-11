import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  const logo =
    "https://assets.website-files.com/6003a2d9ee7d8b258bc99da4/6006559980823590c2afdd02_Logo%20Zerocodegirl.png";
  return (
    <header
      style={{
        position: "fixed",
        left: "0",
        top: "0",
        right: "0",
        bottom: "auto",
        zIndex: "100",
        width: "100%",
        padding: "0vw 5vw",
      }}
    >
      <nav
        style={{
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="right-side">
          <Image src={logo} alt="Logo of website" width={160} height={30} />
        </div>
        <div className="left-side">
          <ul
            style={{
              display: "flex",
             listStyleType: 'none'
            }}
          >
            <li
              style={{
                height: "30px",
                marginRight: "20px",
                marginLeft: "20px",
              }}
            >
              <Link href="/blogs">
                <a
                  style={{
                    transition: "color .2s",
                    color: "#636143",
                    fontSize: "14px",
                    fontWeight: "500",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                  }}
                >
                  Blog
                </a>
              </Link>
            </li>
            <li
              style={{
                height: "30px",
                marginRight: "20px",
                marginLeft: "20px",
              }}
            >
              
              <Link href="/about">
                <a
                  style={{
                    transition: "color .2s",
                    color: "#636143",
                    fontSize: "14px",
                    fontWeight: "500",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                  }}
                >
                  About Us
                </a>
              </Link>
            </li>
            <li
              style={{
                height: "30px",
                marginRight: "20px",
                marginLeft: "20px",
              }}
            >
              
              <Link href="/contact-us">
                <a
                  style={{
                    transition: "color .2s",
                    color: "#636143",
                    fontSize: "14px",
                    fontWeight: "500",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                  }}
                >
                  Contact Us
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
