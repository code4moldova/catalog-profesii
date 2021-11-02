type Props = {
  jobs: Array<{
    name: string;
    future: boolean;
  }>;
};

export const CareerGrowth = (props: Props) => (
  <div className="overflow-x-auto pb-5">
    <ul className="flex min-w-max">
      {props.jobs.map((job, jobIndex) => (
        <li key={jobIndex}>
          <div className="min-w-[8rem] flex items-center mb-2">
            {job.future ? emptyCircle : filledCircle}
            {jobIndex < props.jobs.length - 1 && (
              <hr className="border-black flex-grow" />
            )}
          </div>
          {job.name.split(' ').map((word, wordIndex) => (
            <span className="block pr-3" key={wordIndex}>
              {word}
            </span>
          ))}
        </li>
      ))}
    </ul>
  </div>
);

const emptyCircle = (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="relative"
  >
    <circle cx="7.5" cy="7.5" r="7" fill="#F6F6F6" stroke="black" />
  </svg>
);

const filledCircle = (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="relative"
  >
    <circle cx="7.5" cy="7.5" r="7" fill="#18A0FB" stroke="black" />
  </svg>
);
