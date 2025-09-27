import React, { useContext, useEffect, useState } from "react";
import styles from "./Component.module.css";


function Navbar({ location, units, setUnits }) {
    return (
        <header className={styles.navbar}>
          <div className={styles.brand}>
            <svg viewBox="0 0 24 24" className={styles.logoSvg} aria-hidden>
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0" stopColor="#7dd3fc" />
                  <stop offset="1" stopColor="#60a5fa" />
                </linearGradient>
              </defs>
              <circle cx="12" cy="12" r="9" fill="url(#g1)"></circle>
            </svg>
            <div>
              <div className={styles.appTitle}>Weatherly</div>
              <div className={styles.appSub}>Beautiful local forecast</div>
            </div>
          </div>
    
          <div className={styles.navActions}>
            <div className={styles.locationTag}>
              <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden><path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM12 11.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>
              <span>{location.name}</span>
            </div>
    
            <div className={styles.unitToggle}>
              <button
                className={`${styles.unitBtn} ${units === "C" ? styles.active : ""}`}
                onClick={() => setUnits("C")}
                aria-pressed={units === "C"}
              >
                °C
              </button>
              <button
                className={`${styles.unitBtn} ${units === "F" ? styles.active : ""}`}
                onClick={() => setUnits("F")}
                aria-pressed={units === "F"}
              >
                °F
              </button>
            </div>
          </div>
        </header>
      );
}

function SearchBox({ onSelectLocation = () => {} }) {
    const [q, setQ] = useState("");
    const suggestions = ["San Francisco", "New York", "Mumbai", "London", "Tokyo"];
  
    function submit(e) {
      e.preventDefault();
      if (!q.trim()) return;
      onSelectLocation({ name: q });
    }
  
    return (
      <form className={styles.searchBox} onSubmit={submit}>
        <div className={styles.searchInner}>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search city, e.g. Mumbai"
            aria-label="Search city"
          />
          <button className={styles.searchBtn} aria-label="Search">Search</button>
        </div>
  
        <div className={styles.suggest}>
          {suggestions.map((s) => (
            <button
              type="button"
              key={s}
              onClick={() => { setQ(s); onSelectLocation({ city: s }); }}
              className={styles.suggestBtn}
            >
              {s}
            </button>
          ))}
        </div>
      </form>
    );
}

/* Small inline SVG weather icon switcher for demo */
function WeatherIcon({ name = "partly", size = 80 }) {
    if (name === "sun" || name === "clear") {
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden>
          <g fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="32" cy="32" r="10" fill="currentColor" style={{ opacity: 0.95 }} />
            <g stroke="currentColor">
              <path d="M32 6v6M32 52v6M6 32h6M52 32h6M12 12l4 4M48 48l4 4M12 52l4-4M48 16l4-4"/>
            </g>
          </g>
        </svg>
      );
    }
  
    return (
      <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden>
        <g fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 42a10 10 0 1 1 19.5-6" strokeWidth="2" />
          <path d="M50 44a6 6 0 0 0-6-6H18a6 6 0 1 0 0 12h28a8 8 0 0 0 10-6" />
        </g>
      </svg>
    );
}
  
function WeatherInfo({ weather, city, units = "C" }) {
    const t = units === "C" ? `${weather.temp}°C` : `${Math.round(weather.temp)}°F`;
    const feels = units === "C" ? `${weather.feels}°C` : `${Math.round(weather.feels)}°F`;
  
    return (
      <section className={styles.weatherCard}>
        <div className={styles.weatherLeft}>
          <div className={styles.cityRow}>
            <h2>{city}</h2>
            <div className={styles.cond}>{weather.condition}</div>
          </div>
  
          <div className={styles.tempRow}>
            <div className={styles.tempBig}>{t}</div>
            <div className={styles.smallInfo}>
              <div>Feels like {feels}</div>
              <div>Humidity {weather.humidity}%</div>
              <div>{weather.windKmph} km/h</div>
            </div>
          </div>
  
          <div className={styles.actionsRow}>
            <button className={styles.primaryBtn}>7-day Forecast</button>
            <button className={styles.ghostBtn}>Radar</button>
          </div>
        </div>
  
        <div className={styles.weatherRight}>
          <div className={styles.iconWrap}>
            <WeatherIcon name="partly" size={110} />
          </div>
        </div>
      </section>
    );
}

function HourlyForecast({ hourly = [], units = "C" }) {
    return (
      <div className={styles.hourly}>
        <h3>Hourly</h3>
        <div className={styles.hourList}>
          {hourly.map((h, i) => (
            <div key={i} className={styles.hourItem}>
              <div className={styles.hourTime}>{h.time}</div>
              <div className={styles.hourIcon}>
                {/* tiny illustrative icon */}
                {h.icon === "sun" ? "☀️" : h.icon === "cloud" ? "☁️" : "⛅"}
              </div>
              <div className={styles.hourTemp}>
                {units === "C" ? `${h.temp}°` : `${Math.round(h.temp * 1.8 + 32)}°`}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}


function Card({ title, value, caption }) {
    return (
      <div className={styles.smallCard}>
        <div className={styles.cardTitle}>{title}</div>
        <div className={styles.cardValue}>{value}</div>
        <div className={styles.cardCap}>{caption}</div>
      </div>
    );
  }
  
function Highlights({ weather ,astro }) {
  console.log(astro)
    return (
      <aside className={styles.highlights}>
        <h3>Today’s Highlights</h3>
        <div className={styles.cardsGrid}>
          <Card title="UV Index" value={weather?.uvIndex} caption="Moderate — wear sunscreen" />
          <Card title="Sunrise" value={astro.sunrise} caption="Start early!" />
          <Card title="Sunset" value={astro.sunset} caption="Golden hour" />
          <Card title="Visibility" value="10 km" caption="Clear" />
        </div>
      </aside>
    );
  }


export  {Navbar,SearchBox,WeatherInfo,Highlights,HourlyForecast};
