declare module 'csstype' {
  interface Properties {
    '--tw-shadow'?: string;
  }
}

type Props = {
  low: number;
  medium: number;
  high: number;
};

const formatter = new Intl.NumberFormat();

export const SalaryGrowth = ({ low, medium, high }: Props) => (
  <div
    style={{
      '--tw-shadow':
        '0 0 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    }}
    className="overflow-x-auto bg-white shadow-xl text-center rounded"
  >
    <div className="p-5 inline-flex items-center gap-10 justify-between min-w-max">
      <div>
        <strong className="block">{formatter.format(low)} mdl</strong>
        {/* TODO: Use an open API to calculate EUR, leave as is, or pass through props */}
        <small className="block">(300 EUR)</small>
        <small className="block text-gray-400">Incepător</small>
      </div>
      {arrow}
      <div>
        <strong className="block">{formatter.format(medium)} mdl</strong>
        <small className="block">(500 EUR)</small>
        <small className="block text-gray-400">Mediu în țară</small>
      </div>
      {arrow}
      <div>
        <strong className="block">{formatter.format(high)} mdl</strong>
        <small className="block">(600 EUR)</small>
        <small className="block text-gray-400">Maxim în țară</small>
      </div>
    </div>
  </div>
);

const arrow = (
  <svg
    width="57"
    height="8"
    viewBox="0 0 57 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="inline-block"
  >
    <path
      d="M56.3536 4.35355C56.5488 4.15829 56.5488 3.84171 56.3536 3.64645L53.1716 0.464466C52.9763 0.269204 52.6597 0.269204 52.4645 0.464466C52.2692 0.659728 52.2692 0.976311 52.4645 1.17157L55.2929 4L52.4645 6.82843C52.2692 7.02369 52.2692 7.34027 52.4645 7.53553C52.6597 7.7308 52.9763 7.7308 53.1716 7.53553L56.3536 4.35355ZM0 4.5H56V3.5H0V4.5Z"
      fill="black"
    />
  </svg>
);
