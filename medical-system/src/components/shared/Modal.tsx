export type ModalProps = {
  closeModal: () => void;
};

export function Modal({ closeModal }: ModalProps) {
  return (
    <>
      <div className="fixed flex justify-center items-center w-full h-screen top-0 left-0 bg-[rgba(0,0,0,0.4)]">
        <div className="bg-white p-6 w-[30rem] h-[35rem] rounded-md">
          <div className="flex justify-between items-center mb-4">
            <p className="text-xl font-bold">Add New Patient</p>
            <button className="text-xl font-bold" onClick={closeModal}>
              x
            </button>
          </div>

          <form className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                className="border w-full p-2 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                className="border w-full p-2 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="age">Age</label>
              <input
                type="number"
                id="age"
                className="border w-full p-2 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="birthDate">Birth Date</label>
              <input
                type="text"
                id="birthDate"
                className="border w-full p-2 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="mobile">Mobile</label>
              <input
                type="tel"
                id="mobile"
                className="border w-full p-2 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="border w-full p-2 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                className="border w-full p-2 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                className="border w-full p-2 rounded-md"
              />
            </div>

            <button>Save</button>
          </form>
        </div>
      </div>
    </>
  );
}
