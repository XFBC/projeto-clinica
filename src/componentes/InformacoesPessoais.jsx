export default function InformacoesPessoais() {
  return (
    <>
      <div>
        <div className="flex flex-col w-[100%] border-opacity-50 items-center pt-2 ">
          <h2 className="text-xl font-semibold pb-4">Informaçoes Pessoais</h2>
          <div className="grid w-[90%] md:max-w-[70%]  card bg-gray-700 rounded-box form-control py-10 items-center">
            <form>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
                <div>
                  <label class="label">
                    <span class="label-text font-semibold">Nome</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Digite o nome..."
                    class="input input-bordered w-full max-w-xs grid-cols-6"
                  />
                </div>

                <div>
                  <label class="label">
                    <span class="label-text font-semibold">Profissão</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Digite a profissão..."
                    class="input input-bordered w-full max-w-xs grid-cols-6"
                  />
                </div>

                <div>
                  <label class="label">
                    <span class="label-text font-semibold">
                      Contato/Whatsapp
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Digite o contato..."
                    class="input input-bordered w-full max-w-xs grid-cols-6"
                  />
                </div>

                <div className="flex flex-col">
                  <label class="label">
                    <span class="label-text font-semibold">
                      Data de nascimento
                    </span>
                  </label>
                  <input
                    type="date"
                    class="input input-bordered w-full max-w-xs grid-cols-6"
                  />
                  <button class="btn btn-outline btn-success mt-10 btn-sm md:btn-md lg:btn-md w-32  ">
                    Salvar
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="divider"></div>

          <div className="mb-24">
            <div class="btn-group">
              <button class="btn btn-xs btn-active md:btn-sm">1</button>
              <button class="btn btn-xs md:btn-sm">2</button>
              <button class="btn btn-xs md:btn-sm">3</button>
              <button class="btn btn-xs md:btn-sm">4</button>
              <button class="btn btn-xs md:btn-sm">5</button>
              <button class="btn btn-xs md:btn-sm">6</button>
              <button class="btn btn-xs md:btn-sm">7</button>
              <button class="btn btn-xs md:btn-sm">8</button>
              <button class="btn btn-xs md:btn-sm">9</button>
            </div>

            {/* <ul class="steps lg:steps-horizontal text-sm">
          <li class="step step-secondary text-sm"><a href="">Principais Queixas</a></li>
          <li class="step step-secondary text-sm"><a href="">Principais Queixas</a></li>
          </ul> */}
          </div>
        </div>
      </div>
    </>
  )
}
