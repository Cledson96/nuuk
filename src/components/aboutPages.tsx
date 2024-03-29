import Link from 'next/link';
import { FaAngleDoubleRight } from 'react-icons/fa';

interface props {
  image: string;
  title: string;
  home: string;
}

export default function AboutPage({ image, title, home }: props) {
  return (
    <div
      style={{ backgroundImage: `url(/pt/img/${image})` }}
      className="about-title about-title-bg about-image paralax"
    >
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="about-title-text">
              <h2>{title}</h2>
              <ul>
                <li>
                  <Link href="/">{home}</Link>
                </li>
                <li>
                  <FaAngleDoubleRight color="blue" className="mx-2" />
                  {title}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
