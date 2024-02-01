import Image from 'next/image'

import styles from './ProfilePic.module.css'

export default function ProfilePic() {
  return (
    <section className={styles.section}>
      <div>
        <Image src="/profile-pic.jpeg" alt="V" width={150} height={150} />
        <Image
          src="/profile-pic-pixel.jpeg"
          alt="V"
          width={150}
          height={150}
          priority={true}
        />
      </div>
    </section>
  )
}
