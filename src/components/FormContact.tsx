"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";

type FormData = {
  fullName: string;
  email: string;
  message: string;
  reason: string;
  captcha: string;
};

const FormContact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    console.log(data);
    // Aquí puedes agregar la lógica para enviar los datos a tu servidor
  };

  const generateRandomString = (length: number): string => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  };

  const [captchaText, setCaptchaText] = useState(generateRandomString(6));

  const handleCaptchaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value !== captchaText) {
      // Mostrar un mensaje de error
      console.error("Captcha incorrecto");
    }
  };

  return (
    <div className="container mx-auto  py-4 h-screen flex items-center justify-center" >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" w-full grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-900 text-white"
      >
        {/* IZQUIERDA  */}
        <div className="flex flex-col space-y-10 px-4">
          {/* Formulario */}
          <label htmlFor="fullName" className="font-bold">
            Nombre Completo
          </label>
          <input
            {...register("fullName", { required: true })}
            id="fullName"
            className="border border-gray-700 p-2 bg-gray-800 text-white w-full"
            placeholder="Ingrese su nombre completo"
          />
          {errors.fullName && (
            <span className="text-red-500">Este campo es obligatorio</span>
          )}

          {/* ... otros campos del formulario */}

          <label htmlFor="reason" className="font-bold">
            Motivo de contacto
          </label>
          <select
            {...register("reason")}
            className="border border-gray-700 p-2 bg-gray-800 text-white w-full"
          >
            <option value="">Selecciona una opción</option>
            <option value="consulta">Consulta general</option>
            <option value="soporte">Soporte técnico</option>
            {/* ... otras opciones */}
          </select>

          <div className="flex items-center">
            <label htmlFor="captcha" className="font-bold mr-2">
              Captcha:
            </label>
            <input
              type="text"
              id="captcha"
              value={captchaText}
              readOnly
              className="border border-gray-700 p-2 bg-gray-800 text-white w-24"
            />
            <input
              {...register("captcha")}
              type="text"
              className="border border-gray-700 p-2 bg-gray-800 text-white w-24"
              placeholder="Ingrese el captcha"
              onChange={handleCaptchaChange}
            />
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-full hover:bg-gradient-to-l hover:scale-110 transition duration-300 ease-in-out"
          >
            Enviar
          </button>
        </div>
        {/* DERECHA  */}
        <div className="flex flex-col items-center justify-center px-4">
          <h2 className="text-4xl font-bold text-white">Lets talk</h2>
          <p className="text-lg text-gray-300">
            Ask us anything or just say hi...
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="tel:+1234567890" className="text-blue-500 hover:underline">
              {/* Aquí importa tu SVG de teléfono */}
              123 456 7890
            </a>
            <a
              href="mailto:hey@boxletter.media"
              className="text-blue-500 hover:underline"
            >
              {/* Aquí importa tu SVG de correo */}
              hey@boxletter.media
            </a>
          </div>
          <div className="flex space-x-2 mt-4">
            {/* Aquí importa tus SVGs de redes sociales */}
            <a href="#" className="text-blue-500 hover:underline"></a>
            <a href="#" className="text-blue-500 hover:underline"></a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormContact;
