import React from 'react';

export default function EthiopiaVisaSection() {
    const phoneNumber = +4917630633777;

    // This image path assumes your picture is inside your project's "public/assets/" folder
    // Example file location: your-project/public/assets/ethiopia-visa-service.jpg
    const visaImage = process.env.PUBLIC_URL + '/assets/ethiopia-visa-service.jpg'

    // URL-encoded Somali greeting message that automatically pre-fills on the user's phone
    const encodedMessage = encodeURIComponent(
        "Asc Waxaan u baahanahay caawinaad ku saabsan Visaha Onlineka ee Itoobiya."
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    return (
        <section id="visa-service" style={styles.section}>
            <div style={styles.container}>

                {/* TEXT CONTENT COLUMN (Rendered first for mobile reading hierarchy) */}
                <div style={styles.textSide}>
                    <span style={styles.tag}>Dhammaystirka & xareynta Visaha Onlineka</span>
                    <h2 style={styles.heading}>
                        Caawinaadda <strong>Visaha Onlineka ee Itoobiya</strong> (eVisa)
                    </h2>
                    <p style={styles.description}>
                        Ma raadinaysaa caawinaad ku saabsan buuxinta codsiga Visaha Itoobiya? Annaga ayaa bilow ilaa dhamaad oo dhan kuu samaynayna. Cilad-la'aan, dhakhso iyo si fudud oo talifoonkaaga gacanta ah lagugu dhammaystirayo.
                    </p>

                    <ul style={styles.featureList}>
                        <li style={styles.featureItem}>
                            <span style={styles.icon}>📝</span>
                            <div>
                                <strong style={styles.featureTitle}>Buuxinta Foomka</strong>
                                <p style={styles.featureText}>Waxaan xogtaada socdaalka oo dhan si sax ah ugu qoraynaa barta rasmiga ah ee dawladda.</p>
                            </div>
                        </li>
                        <li style={styles.featureItem}>
                            <span style={styles.icon}>📸</span>
                            <div>
                                <strong style={styles.featureTitle}>Hubinta Dukumentiyada</strong>
                                <p style={styles.featureText}>Waxaan sawirkaaga baasaboorka iyo foomamka u habaynaynaa si waafaqsan xeerarka saxda ah ee hay'adaha socdaalka.</p>
                            </div>
                        </li>
                        <li style={styles.featureItem}>
                            <span style={styles.icon}>💬</span>
                            <div>
                                <strong style={styles.featureTitle}>Taageerada WhatsApp-ka</strong>
                                <p style={styles.featureText}>Ma jiraan waraaqo dhib leh: Kaliya dukumentiyadaada si ammaan ah noogu soo dir fariinta chat-ka.</p>
                            </div>
                        </li>
                    </ul>

                    <div style={styles.actionBlock}>
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.btnWhatsapp}
                        >
                            <span style={{ fontSize: '20px' }}>💬</span> Hadda Nagala sooxiriir WhatsAppka
                        </a>
                        <a
                            href={`https://wa.me/${phoneNumber}`}
                            style={styles.btnSecondary}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Weydii Su'aal
                        </a>
                    </div>
                </div>

                {/* IMAGE COLUMN */}
                <div style={styles.imageSide}>
                    <div style={styles.imageWrapper}>
                        <img
                            src={visaImage}
                            alt="Adeegga Dhammaystirka Visaha Internetka ee Itoobiya"
                            style={styles.mainImg}
                        />

                        {/* Live Floating Support Status Badge */}
                        <a
                            href={`https://wa.me/${phoneNumber}`}
                            style={styles.floatingCard}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div style={styles.pulseDot}></div>
                            <div>
                                <small style={styles.cardStatus}>Caawimaad Tooska Ah</small>
                                <p style={styles.cardPhone}>+49 176 30633777</p>
                            </div>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}

// --- CLEAN, COMPILED MOBILE-FIRST INLINE STYLES ---
const styles = {
    section: {
        padding: '45px 16px',
        backgroundColor: '#f4f8f5',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        color: '#2b2d42',
    },
    container: {
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
    },
    textSide: {
        width: '100%',
    },
    tag: {
        color: '#25D366',
        fontWeight: '700',
        textTransform: 'uppercase',
        fontSize: '11px',
        letterSpacing: '1.5px',
        display: 'inline-block',
        marginBottom: '8px',
    },
    heading: {
        fontSize: '26px',
        lineHeight: '1.25',
        margin: '0 0 14px 0',
        letterSpacing: '-0.5px',
    },
    description: {
        fontSize: '15px',
        lineHeight: '1.5',
        color: '#4a4e69',
        margin: '0 0 24px 0',
    },
    featureList: {
        listStyle: 'none',
        padding: 0,
        margin: '0 0 28px 0',
    },
    featureItem: {
        display: 'flex',
        gap: '12px',
        marginBottom: '16px',
        alignItems: 'flex-start',
    },
    icon: {
        fontSize: '18px',
        background: '#ffffff',
        padding: '8px',
        borderRadius: '50%',
        boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
        display: 'inline-block',
        lineHeight: '1',
    },
    featureTitle: {
        fontSize: '15px',
        color: '#1d3557',
        display: 'block',
        marginBottom: '2px',
    },
    featureText: {
        margin: 0,
        fontSize: '13.5px',
        color: '#6c757d',
        lineHeight: '1.4',
    },
    actionBlock: {
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
    },
    btnWhatsapp: {
        backgroundColor: '#25D366',
        color: '#ffffff',
        padding: '16px',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: '700',
        fontSize: '16px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        boxShadow: '0 4px 12px rgba(37, 211, 102, 0.2)',
    },
    btnSecondary: {
        backgroundColor: 'transparent',
        color: '#25D366',
        padding: '15px',
        border: '2px solid #25D366',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: '600',
        fontSize: '15px',
        textAlign: 'center',
    },
    imageSide: {
        width: '100%',
    },
    imageWrapper: {
        position: 'relative',
        width: '100%',
    },
    mainImg: {
        width: '100%',
        height: 'auto',
        maxHeight: '240px',
        borderRadius: '12px',
        objectFit: 'cover',
        boxShadow: '0 6px 15px rgba(0,0,0,0.06)',
    },
    floatingCard: {
        position: 'absolute',
        bottom: '12px',
        right: '12px',
        backgroundColor: '#ffffff',
        padding: '8px 12px',
        borderRadius: '6px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        textDecoration: 'none',
        color: 'inherit',
    },
    pulseDot: {
        width: '8px',
        height: '8px',
        backgroundColor: '#25D366',
        borderRadius: '50%',
    },
    cardStatus: {
        color: '#25D366',
        display: 'block',
        fontSize: '9px',
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    cardPhone: {
        margin: 0,
        fontSize: '11px',
        fontWeight: 'bold',
    }
};
