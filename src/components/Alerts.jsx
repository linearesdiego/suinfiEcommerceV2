import React from 'react';

export const Alerts = ({ condition, parrafo }) => {
  return (
    <div className="absolute left-0 w-full h-auto flex justify-center items-center z-50">
      <div className="w-11/12 sm:w-2/3 lg:w-1/2 mt-3 bg-[#F9FAFA] rounded-md border border-gray-300 p-6 sm:p-16 py-10 flex flex-col items-center justify-center z-50">
        {condition === true ? (
          <>
            <div className="cartelImg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="128"
                height="128"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#059669"
                  d="M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2m0 1a5 5 0 1 0 0 10A5 5 0 0 0 8 3m-.75 6.042l2.87-2.878a.5.5 0 0 1 .766.637l-.058.07l-3.224 3.232a.5.5 0 0 1-.638.059l-.07-.058l-1.75-1.75a.5.5 0 0 1 .638-.765l.07.057zl2.87-2.878z"
                />
              </svg>
            </div>
            <h1 className="font-bold text-xl sm:text-3xl text-center leading-8 text-[#4F575D] mt-3">
              Registration Successful!
            </h1>
            <br></br>
            <p className="font-light text-sm sm:text-md leading-7 text-[#4F575D] text-center">
              Thank you for registering with us.
            </p>
            <p className="font-light text-sm sm:text-md leading-7 text-[#4F575D] text-center">
              Your account has been successfully created.
            </p>
          </>
        ) : (
          <>
            <div className="cartelImg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="128"
                height="128"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#dc2626"
                  d="M12 16.462q.262 0 .438-.177q.177-.177.177-.439q0-.261-.177-.438q-.176-.177-.438-.177t-.438.177q-.177.177-.177.438q0 .262.177.439q.176.177.438.177m0-3.308q.213 0 .357-.144q.143-.144.143-.356v-5q0-.213-.144-.356q-.144-.144-.357-.144t-.356.144q-.143.143-.143.356v5q0 .212.144.356t.357.144M12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924q-1.216-1.214-1.925-2.856Q3 13.87 3 12.003q0-1.866.708-3.51q.709-1.643 1.924-2.859q1.214-1.216 2.856-1.925Q10.13 3 11.997 3q1.866 0 3.51.708q1.643.709 2.859 1.924q1.216 1.214 1.925 2.856Q21 10.13 21 11.997q0 1.866-.708 3.51q-.709 1.643-1.924 2.859q-1.214 1.216-2.856 1.925Q13.87 21 12.003 21M12 20q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m0-8"
                />
              </svg>
            </div>
            <h1 className="font-bold text-xl sm:text-3xl text-center leading-8 text-[#4F575D] mt-3">
              Oops!
            </h1>
            <br></br>
            <p className="font-light text-sm sm:text-md leading-7 text-[#4F575D] text-center">
              {parrafo}
            </p>
            <p className="font-light text-sm sm:text-md leading-7 text-[#4F575D] text-center">
              Please check your credentials and try again.
            </p>
          </>
        )}
      </div>
    </div>
  );
};
