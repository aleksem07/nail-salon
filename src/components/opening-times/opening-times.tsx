import { OPENING_TIMES } from '@/common/opening-times';
import { addFont } from '@/app/layout';

const OpeningTimes = ({ className }: { className?: string }) => {
  return (
    <div className={`grid justify-start ${className || ''}`}>
      <h2 className='m-0 uppercase'>Режим работы</h2>
      <ul>
        {OPENING_TIMES.map(({ day, time }, index) => {
          return (
            <li
              className='flex gap-2 text-xs uppercase'
              key={`${day} ${index}`}
            >
              <p>{day}</p>
              <p>{time}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OpeningTimes;