import { TbHandClick } from 'react-icons/tb';
import { MdAttachMoney, MdOutlineMiscellaneousServices } from 'react-icons/md';

import Image from 'next/image';
import arrow from '@/img/icons/arrow.png';
export default function ChooseOptions() {
  return (
    <div className="process-section pb-70">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <div className="process-card">
              <i>
                <TbHandClick />
              </i>
              <h3>Peça seu serviço</h3>
              <p>
                Lorem Ipsum is simply dummied text of the printing and
                typesetting industry.
              </p>
              <Image src={arrow} alt="arrow" />
            </div>
          </div>

          <div className="col-md-4 col-sm-12">
            <div className="process-card">
              <i>
                <MdAttachMoney />
              </i>
              <h3>Realize o orçamento</h3>
              <p>
                Lorem Ipsum is simply dummied text of the printing and
                typesetting industry.
              </p>
              <Image src={arrow} alt="arrow" />
            </div>
          </div>

          <div className="col-md-4 col-sm-12 ">
            <div className="process-card">
              <i>
                <MdOutlineMiscellaneousServices />
              </i>
              <h3>Realize seu serviço</h3>
              <p>
                Lorem Ipsum is simply dummied text of the printing and
                typesetting industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
