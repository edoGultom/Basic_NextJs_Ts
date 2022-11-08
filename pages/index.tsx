import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css'; //menggunakan css modules jadi harus  dipanggil dimana mau kita gunakan sehingga meskipun nama ny sama dia tidak akan betabrakan ditempat lain, kalau global css tinggal panggil di _app.tsx


export default function Home() {
  return (
    <Layout pageTitle='Home Page NextJs'>
      <Image src="/profile.png" width={200} height={200} alt="profile" />

      {/* digunakan styles['title-hompage'] karena menggunakan 2 kata dan memisahkan dengan strip */}
      <h1 className={styles['title-homepage']}>Welcome Edo </h1>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <Image src="/profile-1.png" width={200} height={200} alt="post image 1" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum assumenda ipsam earum id eum? Ea mollitia commodi ullam corrupti corporis quaerat, accusantium maxime, reiciendis quis earum, provident aperiam numquam?</p>
      <Image src="/profile-2.png" width={200} height={200} alt="post image 2" />

    </Layout>
  )
}