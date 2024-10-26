import Image from 'next/image';
import Navbar from "./header";

export default function Home() {
  return (
    <div className="min-h-screen bg-green-50 max-w-screen-2xl mx-auto">
      {/* Navbar Component */}
      <Navbar />
      <section id="home">
        <div className="container mx-auto px-4 py-16 pt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Side: Heading and Paragraph */}
            <div>
              <h1 className="text-4xl font-bold text-pink-900 mb-4">
                Welcome to Flower Paradise
              </h1>
              <p className="text-lg font-normal text-orange-400">
                Discover the beauty of nature with our wide variety of fresh
                flowers. At Flower Paradise, we provide the most vibrant and
                fragrant blooms that bring life to every occasion. Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Magni tenetur
                expedita labore quisquam quo. Sunt dolore fugit in vel,
                voluptatem officiis quis vitae molestias corporis, culpa quos
                ducimus nihil fugiat. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Laboriosam, eveniet. Id sapiente distinctio
                officiis totam doloribus dicta, quis beatae aliquam earum
                inventore? Vero odio quasi, optio sapiente aliquid veniam
                assumenda. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Cupiditate libero earum neque eos, modi doloribus vero
                deserunt inventore asperiores, ex alias commodi eaque tempore
                voluptates eligendi expedita odio, quis rem. Lorem, ipsum dolor
                sit amet consectetur adipisicing elit. Blanditiis autem officiis
                cum eum, commodi voluptate. Placeat, sint fuga iure culpa
                quaerat magni quis amet expedita dignissimos, repudiandae
                praesentium harum maxime. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Nobis eveniet voluptatem fugit, non veniam
                perferendis hic est atque adipisci libero reprehenderit
                doloribus minus omnis sapiente, numquam accusamus! Rem,
                perspiciatis quam.
              </p>
            </div>

            {/* Right Side: Image */}
            <div>
              <Image
                src="/image.jpg"
                alt="Flowers"
                width={500} 
                height={300}              
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-green-100 text-pink-900">
        <div className="container mx-auto px-8">
          <h2 className="text-5xl font-bold text-center mb-8">About Us</h2>
          <p className="text-lg text-center max-w-2xl mx-auto text-orange-400">
            Flower Paradise is your one-stop destination for all your floral
            needs. From fresh bouquets to custom arrangements, we aim to bring a
            touch of nature beauty to your life.At Flower Paradise, we believe
            that flowers have the power to bring joy and beauty into every
            moment. Established in 2021, our passion for floristry drives us
            to provide the freshest, handpicked blooms for all occasions.
            Whether you are celebrating a wedding, a birthday, or simply
            brightening your home, we offer a wide variety of floral
            arrangements that capture the essence of natures beauty. Our
            dedicated team is committed to delivering exceptional service and
            stunning designs, ensuring that every bouquet we create tells a
            unique story. Join us in celebrating the magic of flowers!
          </p>
        </div>
      </section>

     {/* product section */}
      <section id="products" className="py-16 bg-gray-100 text-center">
        <h2 className="text-5xl font-bold mb-8 text-pink-900">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 container mx-auto">
          <div className="bg-white shadow-lg rounded-lg p-9">
            <Image
              src="/image_bouquet.jpg"
              alt="1"
              className="w-full h-66 object-cover rounded-md"
              width={500} 
              height={300} 
            
            />
            <p className="mt-2 text-pink-500 font-bold">$30.00</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-10">
            <Image
              src="/img_bouq1.jpg"
              alt="2"
              className="w-full h-66 object-cover rounded-md"
              width={500} 
              height={300} 
            
            />
            <p className="mt-2 text-pink-500 font-bold">$25.00</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <Image
              src="/image_bouquet 3.jpg"
              alt="3"
              className="w-full h-66 object-cover rounded-md"
              width={500} 
              height={300} 
            
            />
            <p className="mt-2 text-pink-500 font-bold">$20.00</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <Image
              src="/image_bouq4.jpg"
              alt="4"
              className="w-full h-66 object-cover rounded-md"
              width={500} 
              height={300} 
            
            />
            <p className="mt-2 text-pink-500 font-bold">$20.00</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <Image
              src="/image_bouq 5.jpg"
              alt="5"
              className="w-full h-66 object-cover rounded-md"
              width={500} 
              height={300} 
            
            />
            <p className="mt-2 text-pink-500 font-bold">$20.00</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <Image
              src="/image_bouq6.jpg"
              alt="6"
              className="w-full h-66 object-cover rounded-md"
              width={500} 
              height={300} 
            
            />
            <p className="mt-2 text-pink-500 font-bold">$20.00</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-red-100 text-pink-900">
        <div className="container mx-auto px-8">
          <h2 className="text-5xl font-bold text-center mb-8">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-5xl font-semibold mb-4">Get in Touch</h3>
              <p className="mb-2">
                <strong>Address:</strong> Flower Street, ABC
              </p>
              <p className="mb-2">
                <strong>Email:</strong> flowerparadise@.com
              </p>
              <p className="mb-2">
                <strong>Phone:</strong> +123 456 7890
              </p>
              <p>Feel free to contact us for any queries or orders!</p>
            </div>

            {/* Contact Form */}
            <div>
              <form className="bg-white p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-lg font-semibold mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-lg font-semibold mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-lg font-semibold mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Enter your message"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-pink-300 text-white py-2 rounded hover:bg-pink-600 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <p className="py-4 bg-pink-400 text-white text-center">&copy; FlowerShop Website | Designed by Areeba.</p>
    </div>
  );
}
