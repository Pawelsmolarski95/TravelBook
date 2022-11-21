import styles from './About.module.scss'

const About = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.h1}> About me</h1>
            <img className={styles.image} src='https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='men'/>
            <p>Nice to meet you, I’m John.
            I believe when you travel, there’s no better way to connect with people, than through food.
            
            No matter what culture or country you’re from, or wherever you choose to travel, the one thing you and I have in common is that food is a huge part of our lives.
            
            Migrationology.com is where people who travel for food learn about authentic local food from around the world (or at least from the destinations I’ve personally visited – I keep this blog very personal).
            </p>
        </div>
    )
}

export default About;