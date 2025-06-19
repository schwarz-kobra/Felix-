# AutoParkControl 🚗🅿️

Ein vollautomatisiertes Schranken- und Parksystem mit IR-Sensoren, Servos, LCD-Anzeige und akustischem Warnsystem.  
Erstellt von **Felix & Felix Papa**  
© Copyright by Feliy 2025

## 🔧 Funktionen

- LCD-Display mit Live-Anzeige der freien Parkplätze
- Zwei IR-Sensoren zur Fahrzeugerkennung
- Zwei Servomotoren für Schranken (Einfahrt & Ausfahrt)
- Piezo-Buzzer für akustische Warnungen und Störungen
- Laser + LDR zur Schrankensteuerung
- Störungsmodus mit Button-Reset
- Info-Modus mit Urheberanzeige

## 📷 Screenshot
![Deckblatt](Anl.png)

## 🧰 Benötigte Hardware

- 1x Arduino Uno
- 1x I2C LCD Display (0x27)
- 2x IR-Sensoren
- 2x Servomotoren
- 2x Laser + 2x Fotowiderstand (LDR)
- 1x Piezo-Buzzer
- 1x Taster
- Externes Netzteil empfohlen!

## 🗂️ Aufbau und Pins

| Komponente         | Pin Arduino |
|--------------------|-------------|
| LCD SDA            | A4          |
| LCD SCL            | A5          |
| IR Sensor 1 (OUT)  | D2          |
| IR Sensor 2 (OUT)  | D3          |
| Servo 1 (Einfahrt) | D6          |
| Servo 2 (Ausfahrt) | D7          |
| Laser 1            | D8          |
| Laser 2            | D9          |
| LDR 1 (Analog)     | A0          |
| LDR 2 (Analog)     | A1          |
| Piezo-Buzzer       | D5          |
| Taster             | D4          |

## 🛠️ Installation

1. Lade den Code hoch mit der Arduino IDE
2. Stelle sicher, dass alle Sensoren und Aktoren richtig angeschlossen sind
3. Nutze ein externes Netzteil für stabile Spannungsversorgung
4. Button drücken für Info-Anzeige

## ⚖️ Lizenz

MIT License  
© 2025 by Feliy
