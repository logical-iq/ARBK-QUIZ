/**
 * Quiz data accessible as a JavaScript module
 */
export const quizData = {
  "chapters": [
    {
      "id": "1",
      "title": "K1 – Maschinensprache und Assembler",
      "description": "Test your knowledge about machine language and assembler",
      "questions": [
        {
          "id": "1.1",
          "text": "Betriebssysteme sind:",
          "type": "single",
          "options": {
            "A": "aufgabenangemessen",
            "B": "stets universell einsetzbar",
            "C": "Verwalten nur die Systemressourcen eines Rechners"
          },
          "correctAnswer": "A"
        },
        {
          "id": "1.2",
          "text": "Im Dialog/Terminalbetrieb sind die Ressourcenanforderungen:",
          "type": "single",
          "options": {
            "A": "Im Vorherein bekannt",
            "B": "Im Vorherein nicht bekannt",
            "C": "Nur beim Multi-User-Betrieb bekannt",
            "D": "Für alle Benutzer identisch"
          },
          "correctAnswer": "B"
        },
        {
          "id": "1.3",
          "text": "Welche Betriebsmittel werden NICHT von einem Betriebssystem verwaltet:",
          "type": "single",
          "options": {
            "A": "CPU",
            "B": "Speicher",
            "C": "Netzwerk",
            "D": "USB-Stick",
            "E": "Keiner der Antworten oben"
          },
          "correctAnswer": "E"
        },
        {
          "id": "1.4",
          "text": "Bei der Harvard-Architektur ist:",
          "type": "single",
          "options": {
            "A": "Das Steuerwerk strukturell identisch zur „von Neumann“-Architektur",
            "B": "Das Steuerwerk zwingend unterschiedlich zur „von Neumann“-Architektur",
            "C": "Kann das Steuerwerk je nach CPU-Entwurf identisch oder unterschiedlich zur „von Neumann“-Architektur sein"
          },
          "correctAnswer": "B"
        },
        {
          "id": "1.5",
          "text": "Maschinensprache und Assembler sind:",
          "type": "single",
          "options": {
            "A": "Identisch",
            "B": "Können bedingt ineinander überführt werden",
            "C": "Können komplett ineinander überführt werden"
          },
          "correctAnswer": "B"
        },
        {
          "id": "1.6",
          "text": "Der Stack Pointer im AVR:",
          "type": "single",
          "options": {
            "A": "Muss immer initialisiert werden",
            "B": "Muss nur bei Benutzung von Sprüngen initialisiert werden",
            "C": "Muss vor der Ausführung einer den Stack modifizierenden Operation initialisiert werden"
          },
          "correctAnswer": "C"
        },
        {
          "id": "1.7",
          "text": "Der Program Counter des AVR inkrementiert bei Erhöhung:",
          "type": "single",
          "options": {
            "A": "Um ein Byte",
            "B": "Um zwei Byte",
            "C": "Um drei Byte"
          },
          "correctAnswer": "B"
        },
        {
          "id": "1.8",
          "text": "Im AVR sind alle Befehle:",
          "type": "single",
          "options": {
            "A": "Genau 8 Bit lang",
            "B": "Genau 16 Bit lang",
            "C": "Genau 32 Bit lang",
            "D": "Bis auf wenige Ausnahmen 16 Bit lang"
          },
          "correctAnswer": "D"
        },
        {
          "id": "1.9",
          "text": "Das folgende Bild zeigt:",
          "type": "single",
          "options": {
            "A": "Data Direct Addressing",
            "B": "Data Indirect Addressing with Displacement",
            "C": "Data Indirect Addressing with Post-Increment",
            "D": "Data Indirect Addressing with Pre-Increment"
          },
          "correctAnswer": "C"
        },
        {
          "id": "1.10",
          "text": "Die RJMP Operation in AVR Assembler entspricht in C:",
          "type": "single",
          "options": {
            "A": "Einem Unterprogrammaufruf",
            "B": "Einem Goto",
            "C": "Einer Funktionsdefinition",
            "D": "Einer Funktionsdeklaration"
          },
          "correctAnswer": "B"
        },
        {
          "id": "1.11",
          "text": "Der C-Code: [char* c = 0xff; *c = 0x42;] Entspricht in AVR Assembler:",
          "type": "single",
          "options": {
            "A": "CLR R31 LDI R30, 0xff LDI R0, 0x42 ST Z, R0",
            "B": "CLR R31 LDI R30, 0xff LDI R0, 0x42 ST Z+, R0",
            "C": "CLR R31 LDI R30, 0xff LDI R0, 0x42 ST -Z, R0",
            "D": "CLR R31 LDI R30, 0xff LDI R0, 0x42 LD R0, Z",
            "E": "CLR R31 LDI R30, 0xff LDI R0, 0x42 LD R0, Z-"
          },
          "correctAnswer": "A"
        },
        {
          "id": "1.12",
          "text": "Die Dauer einer Warteschleife berechnet sich aus:",
          "type": "multiple",
          "options": {
            "A": "Registerwerten",
            "B": "Verschachtelung",
            "C": "CPU-Takt",
            "D": "Verwenden Instruktionen",
            "E": "Zuschlägen für Einsprung und Rücksprung"
          },
          "correctAnswer": ["A", "B", "C", "D", "E"]
        },
        {
          "id": "1.13",
          "text": "Das Portregister PORTx (PORTB, PORTD, ...) dient:",
          "type": "multiple",
          "options": {
            "A": "Zum Schreiben von Daten auf den Ausgang",
            "B": "Zum Lesen von Daten vom Eingang",
            "C": "Dem Einschalten der Pull-Up Widerstände",
            "D": "Zur Bestimmung der Datenrichtung der Pins eines Ports"
          },
          "correctAnswer": ["A", "C"]
        },
        {
          "id": "1.14",
          "text": "RCALL und CALL unterscheiden sich:",
          "type": "multiple",
          "options": {
            "A": "Durch die Adressierungsart",
            "B": "Durch die Menge Adressierbaren Speichers",
            "C": "Machen beide dasselbe sind nur nicht auf allen Plattformen verfügbar",
            "D": "RCALL wird nur verwendet, wenn Parameter auf dem Stack übergeben werden, Call kann man immer verwenden, braucht aber mehr Speicher"
          },
          "correctAnswer": ["A", "B"]
        },
        {
          "id": "1.15",
          "text": "Beim Aufruf rekursiver Funktionen hängt die Menge des benötigten Stackspeichers:",
          "type": "multiple",
          "options": {
            "A": "Von der Rekursionstiefe ab",
            "B": "Von der Anzahl der Rekursionsparameter ab",
            "C": "Nur von der Anzahl der Aufrufe ab",
            "D": "Nur von der Anzahl der Rekursionsparameter ab"
          },
          "correctAnswer": ["A", "B"]
        },
        {
          "id": "1.16",
          "text": "Beim Einlesen eines Tasters von PORTD.0 (PD0) müssen folgende Bedingungen erfüllt sein:",
          "type": "single",
          "options": {
            "A": "DDRD = 0bxxxxxxx0; PORT D = 0bxxxxxxx1;",
            "B": "DDRD = 0bxxxxxxx1; PORT D = 0bxxxxxxx0;",
            "C": "DDRD = 0bxxxxxxx0; PORT D = 0bxxxxxxx0;",
            "D": "DDRD = 0bxxxxxxx1; PORT D = 0bxxxxxxx1;"
          },
          "correctAnswer": "A"
        }
      ],
      "hints": [
        "Die Fragen können Single oder Multiple-Choice sein",
        "Bei Multiple-Choice werden nur komplett richtige Aufgaben bepunktet!!!",
        "Bei teilweise richtigen oder falschen Angaben gibt es dementsprechend 0 Punkte"
      ]
    },
    {
      "id": "2",
      "title": "K2 – Interrupts und Ein-/Ausgabe, Assemblierung",
      "description": "Focuses on interrupts, input/output operations, and assembly programming for ATMega8 microcontrollers.",
      "questions": [
        {
          "id": "2.1",
          "text": "Eine LED die „Active Low“ an einem PORTB.0 des ATMega8 angeschlossen ist leuchtet:",
          "type": "single",
          "options": {
            "A": "Wenn PORTB = 0b00000001",
            "B": "Wenn PORTB = 0b00000000",
            "C": "Wenn PINB  = 0b00000000",
            "D": "Wenn PINB  = 0b00000001"
          },
          "correctAnswer": "B"
        },
        {
          "id": "2.2",
          "text": "Ein Vorteil von Polling ist:",
          "type": "single",
          "options": {
            "A": "dass keine Ereignisse verloren gehen",
            "B": "dass der Stromverbrauch gering ist",
            "C": "dass Abfragen mit hoher Frequenz möglich sind",
            "D": "dass man nur das DDR programmieren muss"
          },
          "correctAnswer": "C"
        },
        {
          "id": "2.3",
          "text": "Eine ISR wird aufgerufen, wenn:",
          "type": "single",
          "options": {
            "A": "Der Interrupt für die Schnittstelle und das globale Interrupt Enable Bit gesetzt sind und ein passendes Ereignis auftritt",
            "B": "Sich der Zustand einer Schnittstelle geändert hat, ungeachtet der Programmierung der Register",
            "C": "Wenn die Interrupt Unit entsprechend programmiert wurde",
            "D": "Beim Auftreten eines NMI"
          },
          "correctAnswer": "A"
        },
        {
          "id": "2.4",
          "text": "Bei einer ISR muss am Ende der ISR:",
          "type": "single",
          "options": {
            "A": "Per CLI die Interruptverarbeitung wieder eingeschaltet werden",
            "B": "Per SEI die Interruptverarbeitung wieder eingeschaltet werden",
            "C": "Nicht weiter getan werden, RETI erledigt das schon",
            "D": "Per EJMP in die Vektortabelle die ISR aufgerufen werden"
          },
          "correctAnswer": "C"
        },
        {
          "id": "2.5",
          "text": "Ein Softwareinterrupt kann im ATMega8 erzeugt werden durch:",
          "type": "multiple",
          "options": {
            "A": "Den Aufruf von RETI",
            "B": "Einen BREAK Befehl auf den Vektor in der Interrupttabelle",
            "C": "Einen CALL oder RCALL Befehl auf die entsprechende Adresse in der Interrupttabelle",
            "D": "Auf dem ATMega geht das nicht",
            "E": "Einen JMP oder RJMP Befehl auf die entsprechende Adresse in der Interrupttabelle"
          },
          "correctAnswer": ["C", "E"]
        },
        {
          "id": "2.6",
          "text": "Ein Interruptaufruf speichert auf dem Stack:",
          "type": "single",
          "options": {
            "A": "Die Adresse des Interruptvektors",
            "B": "Die Adresse der ISR",
            "C": "Die Rücksprungadresse PC",
            "D": "Die Rücksprungadresse PC-1",
            "E": "Die Rücksprungadresse PC+1"
          },
          "correctAnswer": "E"
        },
        {
          "id": "2.7",
          "text": "Die Anzahl möglicher Interruptvektoren ergibt sich:",
          "type": "multiple",
          "options": {
            "A": "Aus der CPU bzw. MCU Architektur",
            "B": "Der Registerarchitektur",
            "C": "Der Größe der Befehlsworte",
            "D": "Der Größe der Vektortabelle"
          },
          "correctAnswer": ["A", "D"]
        },
        {
              "id": "2.8",
              "text": "Die Modifikation der Häufigkeit eines Timer-Interrupts beim AVR geschieht mittels Veränderns von:",
              "type": "multiple",
              "options": {
                "A": "Nur CPU, Timer-Takt",
                "B": "Nur CPU, Timer-Takt, Timer-Wert",
                "C": "Nur CPU, Timer-Takt, Timer-Wert, TIMSK",
                "D": "Nur CPU, Timer-Takt, Timer-Wert, MCCUR"
              },
              "correctAnswer": ["B", "C"]
            },
        {
          "id": "2.10",
          "text": "Eine ISR im Vergleich zu Polling:",
          "type": "single",
          "options": {
            "A": "Garantiert das Erkennen mindestens des ersten Ereignisses",
            "B": "Garantiert das Erkennen aller Ereignisse",
            "C": "Ist leichter zu implementieren",
            "D": "Erkennt ein Ereignis nur, wenn sie regelmäßig aufgerufen wird"
          },
          "correctAnswer": "A"
        },
        {
          "id": "2.11",
          "text": "Die PC-relative Adressierung hat gegenüber absoluter Adressierung den Vorteil:",
          "type": "single",
          "options": {
            "A": "dass mehr Speicher adressiert werden kann",
            "B": "dass weniger RAM verbraucht wird",
            "C": "dass das entstehende Programm im Speicher verschiebbar ist",
            "D": "dass der Assembler Adressbezüge direkt auflösen kann"
          },
          "correctAnswer": "C"
        }
      ],
      "hints": [
        "Die Fragen können Single oder Multiple-Choice sein",
        "Bei Multiple-Choice werden nur komplett richtige Aufgaben bepunktet!!!",
        "Bei teilweise richtigen oder falschen Angaben gibt es dementsprechend 0 Punkte"
      ]
    },
    {
      "id": "3",
      "title": "K3 – Zahlenformate in Rechnerarchitekturen",
      "description": "Explores number formats, fixed-point and floating-point arithmetic, and their handling in computer architectures.",
      "questions": [
        {
          "id": "3.1",
          "text": "Eine Aufteilung in Module sollte geschehen: (Allgemeine Frage)",
          "type": "single",
          "options": {
            "A": "Nach organisatorischen Kriterien (wer macht was)",
            "B": "Nach kommerziellen Kriterien (was kostet wieviel)",
            "C": "Nach fachlichen/logischen Kriterien (was macht das)",
            "D": "Nach der Größe der Module"
          },
          "correctAnswer": "C"
        },
        {
          "id": "3.2",
          "text": "Der Linker dient dazu: (Allgemeine Frage)",
          "type": "single",
          "options": {
            "A": "Ausschließlich die einzelnen Module aneinander zu hängen",
            "B": "Die Interrupts dem richtigen Modul zuzuweisen",
            "C": "Den Assemblercode zu übersetzen",
            "D": "Die Adressbezüge zwischen Modulen aufzulösen"
          },
          "correctAnswer": "D"
        },
        {
          "id": "3.3",
          "text": "Die Semantik eines Datenwortes ergibt sich:",
          "type": "single",
          "options": {
            "A": "Aus dessen Breite",
            "B": "Aus dessen Position im Speicher",
            "C": "Aus den genutzten Assemblerbefehlen",
            "D": "Aus der Interpretation im logischen Ablauf des Programmes"
          },
          "correctAnswer": "D"
        },
        {
          "id": "3.4",
          "text": "Festkommazahlen haben:",
          "type": "single",
          "options": {
            "A": "Niemals einen Überlauf",
            "B": "Einen Wertebereich der von der Position des Kommas abhängt",
            "C": "Ein separates Vorzeichenbit",
            "D": "Stets eine größere Präzision als eine Gleitkommazahl"
          },
          "correctAnswer": "B"
        },
        {
          "id": "3.5",
          "text": "Die Ablage der Charakteristik vor der Mantisse einer GKZ im Speicher ermöglicht:",
          "type": "single",
          "options": {
            "A": "Das schnelle Umwandeln in eine Realzahl",
            "B": "Die Bestimmung des Zweierkomplements",
            "C": "Eine einfachere Konvertierung zwischen verschiedenen Formaten (fp16, fp32)",
            "D": "Einen einfacheren Vergleich von Zahlen"
          },
          "correctAnswer": "D"
        },
        {
          "id": "3.6",
          "text": "Bei der Addition zweier GKZ wird:",
          "type": "single",
          "options": {
            "A": "Der Exponent der kleineren Zahl dem Exponenten der größeren Zahl angeglichen",
            "B": "Der Exponent der größeren Zahl dem Exponenten der kleineren Zahl angeglichen",
            "C": "Die Mantisse der kleineren Zahl der Mantisse der größeren Zahl angeglichen",
            "D": "Die Mantisse der größeren Zahl der Mantisse der kleineren Zahl angeglichen"
          },
          "correctAnswer": "A"
        },
        {
          "id": "3.7",
          "text": "Bei der Normalisierung einer GKZ:",
          "type": "single",
          "options": {
            "A": "Wird die Mantisse solange nach links verschoben, bis im obersten gespeicherten Bit eine 1 steht",
            "B": "Die Charakteristik solange erhöht bis im obersten Bit der Charakteristik eine 1 steht",
            "C": "Wird die Mantisse solange nach links verschoben, bis eine 1 aus dem obersten Bit geschoben wurde",
            "D": "Die Mantisse solange nach links verschoben, bis die Charakteristik auf 1 steht"
          },
          "correctAnswer": "C"
        },
        {
          "id": "3.8",
          "text": "Die Menge darstellbarer GKZ:",
          "type": "single",
          "options": {
            "A": "Ist größer als die entsprechende Menge von reellen Zahlen",
            "B": "Ist gleich groß wie die entsprechende Menge von reellen Zahlen",
            "C": "Ist kleiner als die entsprechende Menge an reellen Zahlen",
            "D": "Ist nicht beschränkt"
          },
          "correctAnswer": "C"
        },
        {
          "id": "3.9",
          "text": "Beim Rechnen mit GKZ gilt:",
          "type": "single",
          "options": {
            "A": "Das Assoziativgesetz",
            "B": "Das Distributivgesetz",
            "C": "Das Transitivgesetz"
          },
          "correctAnswer": "C"
        },
        {
          "id": "3.10",
          "text": "In C++ sollten zwei GKZ a, b miteinander vergleichen werden mit:",
          "type": "single",
          "options": {
            "A": "if (a=b)",
            "B": "if (a==b)",
            "C": "if (a-b == 0.0)",
            "D": "if (a-b < eps)"
          },
          "correctAnswer": "D"
        }
      ],
      "hints": [
        "Die Fragen können Single oder Multiple-Choice sein",
        "Bei Multiple-Choice werden nur komplett richtige Aufgaben bepunktet!!!",
        "Bei teilweise richtigen oder falschen Angaben gibt es dementsprechend 0 Punkte"
      ]
    },
    {
      "id": "4",
      "title": "K4 – Organisation der Ein-/Ausgabe",
      "description": "Covers input/output organization, bus topologies, and interfaces like USB, RS232, and DMA in computer systems.",
      "questions": [
        {
          "id": "4.1",
          "text": "Bei der Memory-Mapped-I/O werden die E/A Module:",
          "type": "single",
          "options": {
            "A": "Über einen speziellen Baustein mit einer Basisadresse angesprochen",
            "B": "Über direkte Adressen im Adressraum der CPU angesprochen",
            "C": "Über einen separaten Bus angesprochen",
            "D": "Bei der Harvard-Architektur über direkte Adressen angesprochen bei der „von Neumann“-Architektur über einen speziellen Baustein angesprochen"
          },
          "correctAnswer": "B"
        },
        {
          "id": "4.2",
          "text": "Ein Vorteil von Port-Mapped-I/O ist:",
          "type": "single",
          "options": {
            "A": "Die Homogenität des Befehlssatzes wird verbessert",
            "B": "Es stehen mehr Adressierungsarten zur Verfügung",
            "C": "Die Opcodes sind oftmals kleiner",
            "D": "Die Opcodes haben immer die gleiche Größe wie die anderen Opcodes"
          },
          "correctAnswer": "C"
        },
        {
          "id": "4.3",
          "text": "Bei einer Punkt-Zu-Punkt Bustopologie:",
          "type": "single",
          "options": {
            "A": "Teilen sich alle Teilnehmer die Bandbreite gleichmäßig",
            "B": "Wird die Bandbreite zwischen den Teilnehmern priorisiert",
            "C": "Steht allen Teilnehmern die volle Bandbreite zur Verfügung",
            "D": "Schwankt die Bandbreite je nach Entfernung der Teilnehmer zueinander"
          },
          "correctAnswer": "C"
        },
        {
          "id": "4.4",
          "text": "Die Southbridge einer PC-Architektur bindet:",
          "type": "single",
          "options": {
            "A": "Den Cache an",
            "B": "Den RAM an",
            "C": "Die GPU an",
            "D": "Externe Geräte an"
          },
          "correctAnswer": "D"
        },
        {
          "id": "4.5",
          "text": "Der PCIe Bus ist ein:",
          "type": "single",
          "options": {
            "A": "Serieller, Punkt zu Punkt Bus",
            "B": "Serieller, Ring Bus",
            "C": "Paralleler Punkt-zu-Punkt Bus",
            "D": "Paralleler Ring-Bus",
            "E": "Paralleler Stern-Bus"
          },
          "correctAnswer": "A"
        },
        {
          "id": "4.6",
          "text": "USB ist auf physikalischer Ebene folgende Topologie:",
          "type": "single",
          "options": {
            "A": "Bus",
            "B": "Stern",
            "C": "Punkt-zu-Punkt",
            "D": "Ring"
          },
          "correctAnswer": "B"
        },
        {
          "id": "4.7",
          "text": "USB Unterstützt an einem Bus:",
          "type": "single",
          "options": {
            "A": "< 127 Teilnehmer",
            "B": "= 127 Teilnehmer",
            "C": "< 128 Teilnehmer",
            "D": "128 Teilnehmer"
          },
          "correctAnswer": "C"
        },
        {
          "id": "4.8",
          "text": "Bei der Stromversorgung von Geräten über den USB-Bus:",
          "type": "single",
          "options": {
            "A": "Verhandelt der Busteilnehmer mit dem Host den Strom",
            "B": "Verhandelt der Busteilnehmer mit dem Host die Spannung",
            "C": "Verhandelt der Busteilnehmer mit dem Host die Leistung",
            "D": "Bekommt jeder Busteilnehmer paritätisch einen Teil der Leistung"
          },
          "correctAnswer": "A"
        },
        {
          "id": "4.9",
          "text": "Beim Interrupt Transfer bei USB:",
          "type": "single",
          "options": {
            "A": "Löst der Busteilnehmer im USB-Controller des Hosts ein Interrupt aus, wenn Daten übertragen werden",
            "B": "Löst der Host bei einem Busteilnehmer ein Interrupt aus, um Datenübertragung anzustoßen",
            "C": "Fragt der Host den Client zyklisch mit einstellbarer Frequenz ab („polling“)",
            "D": "Fragt der Client den Host zyklisch mit einstellbarer Frequenz ab („polling“)"
          },
          "correctAnswer": "C"
        },
        {
          "id": "4.10",
          "text": "Wenn bei einem isochronen Transfer bei USB-Übertragungsfehler auftreten:",
          "type": "single",
          "options": {
            "A": "Werden die Daten neu übertragen",
            "B": "Werden die Daten nur dann erneut übertragen, wenn genügend Bandbreite vorhanden ist",
            "C": "Werden die Daten erneut Übertragen, wenn das Paritätsbit das signalisiert",
            "D": "Werden die Daten nicht erneut übertragen"
          },
          "correctAnswer": "D"
        },
        {
          "id": "4.11",
          "text": "Bei RS232 ist eine logische 1:",
          "type": "single",
          "options": {
            "A": "Eine Positive Spannung >1,8V",
            "B": "Eine Positive Spannung >3V",
            "C": "Eine Negative Spannung <1,8V",
            "D": "Eine Negative Spannung <3V"
          },
          "correctAnswer": "D"
        },
        {
          "id": "4.12",
          "text": "Für eine Datenübertragung zwischen zwei DTE benötigt man mindestens:",
          "type": "single",
          "options": {
            "A": "Eine Leitung",
            "B": "Zwei Leitungen",
            "C": "Drei Leitungen",
            "D": "Vier Leitungen",
            "E": "Fünf Leitungen"
          },
          "correctAnswer": "B"
        },
        {
          "id": "4.13",
          "text": "Ein Nullmodem entsteht durch die Verbindung:",
          "type": "single",
          "options": {
            "A": "GND-GND TxD-TxD RxD-RxD",
            "B": "GND-GND TxD-RxD RxD-TxD",
            "C": "GND-GND TxD-RxD RTS-CTS",
            "D": "GND-GND TxD-RxD",
            "E": "GND-GND RxD-TxD"
          },
          "correctAnswer": "B"
        },
        {
          "id": "4.14",
          "text": "Bei einer gepufferten Eingabe:",
          "type": "single",
          "options": {
            "A": "Hat der Empfängerbaustein immer genau ein Register",
            "B": "Hat der Empfängerbaustein immer mehr als ein Register",
            "C": "Gibt es in der Empfängerkette einen E/A-Puffer",
            "D": "Gibt es in der Sendekette einen E/A-Puffer"
          },
          "correctAnswer": "C"
        },
        {
          "id": "4.15",
          "text": "Bei der Nutzung von programmgesteuerter E/A und interruptgesteuerter E/A:",
          "type": "single",
          "options": {
            "A": "Muss man sich für Ein- und Ausgabe zwischen einem der beiden Verfahren entscheiden",
            "B": "Können die Verfahren für Ein- und Ausgabe getrennt gewählt werden",
            "C": "Muss das gewählte Verfahren jeweils unterschiedlich sein",
            "D": "Kann interruptgesteuerte E/A nur verwendet werden, wenn es einen ausreichend großen E/A-Puffer gibt"
          },
          "correctAnswer": "B"
        },
        {
          "id": "4.16",
          "text": "Ein Nachteil interruptgesteuerter E/A ist:",
          "type": "single",
          "options": {
            "A": "Die hohe Verzögerungszeit zwischen Interrupt und Verarbeitung",
            "B": "Das häufige Auftreten von Interrupts",
            "C": "Das seltene Auftreten von Interrupts",
            "D": "Die hohe Rechenlast beim Lesen und Schreiben von Daten"
          },
          "correctAnswer": "B"
        },
        {
          "id": "4.17",
          "text": "Bei der Übertragung per DMA ist:",
          "type": "single",
          "options": {
            "A": "Die CPU gar nicht beteiligt",
            "B": "Die CPU nur bei der Aushandlung der Busarbitrierung beteiligt",
            "C": "Die CPU bei der Datenübertragung beteiligt",
            "D": "Die CPU bei allen Schritten beteiligt"
          },
          "correctAnswer": "B"
        },
        {
          "id": "4.18",
          "text": "In Demand Mode DMA:",
          "type": "single",
          "options": {
            "A": "Wird abwechselnd mit der CPU ein Speicherzugriff durchgeführt",
            "B": "Wird ein kompletter Block von Daten übertragen",
            "C": "Solange Übertragen bis das E/A Gerät den Bus wieder frei gibt"
          },
          "correctAnswer": "C"
        },
        {
          "id": "4.19",
          "text": "Ein Nachteil des Demand Mode ist:",
          "type": "single",
          "options": {
            "A": "Die CPU kann ggf. nicht mit ihrer Verarbeitung fortfahren da Sie auf Daten wartet",
            "B": "Die CPU wird durch den DMA Controller mit häufigen Interrupts belastet",
            "C": "Die CPU muss den Bus pollen, um zu sehen, wann er wieder frei ist",
            "D": "Der Demand Mode hat keine Nachteile"
          },
          "correctAnswer": "A"
        },
        {
          "id": "4.20",
          "text": "Die Auswertung eines Inkrementgebers:",
          "type": "single",
          "options": {
            "A": "Kann nur mit Interrupt erfolgen",
            "B": "Kann nur mit polling erfolgen",
            "C": "Kann nur mit DMA erfolgen",
            "D": "Kann mit Interrupt und Polling erfolgen",
            "E": "Kann mit Interrupt und DMA erfolgen"
          },
          "correctAnswer": "D"
        },
        {
          "id": "4.21",
          "text": "Tasten werden in der Regel in einer Matrix verschaltet. Der Grund ist:",
          "type": "single",
          "options": {
            "A": "dass die Verarbeitung so schneller erfolgen kann",
            "B": "Dass weniger PortPins zum Auslesen benötigt werden",
            "C": "Dass es mechanisch leichter zu realisieren ist als jede Taste einzeln anzuschließen",
            "D": "Dass man so das gleichzeitige Drücken mehrere Tasten besser erkennen kann"
          },
          "correctAnswer": "B"
        },
        {
          "id": "4.22",
          "text": "Der Vorteil eines Nadeldruckers gegenüber einem Laserdrucker ist:",
          "type": "single",
          "options": {
            "A": "Die höhere Druckgeschwindigkeit",
            "B": "Die höhere Druckauflösung",
            "C": "Die einfachere Verkabelung in dem Rechner",
            "D": "Die Möglichkeit Durchschläge zu erstellen"
          },
          "correctAnswer": "D"
        }
      ],
      "hints": [
        "Die Fragen können Single oder Multiple-Choice sein",
        "Bei Multiple-Choice werden nur komplett richtige Aufgaben bepunktet!!!",
        "Bei teilweise richtigen oder falschen Angaben gibt es dementsprechend 0 Punkte"
      ]
    },
    {
      "id": "5",
      "title": "K5 – Speichertechnik",
      "description": "Explores memory technologies, cache hierarchies, and memory management in modern computer architectures.",
      "questions": [
        {
          "id": "5.1",
          "text": "Die Zugriffsgeschwindigkeit (Latenz) beim Lesen von Daten einer magnetischen Festplatte ergibt sich:",
          "type": "single",
          "options": {
            "A": "Nur durch die Zeit, die der Lesekopf benötigt, um die richtige Spur zu finden",
            "B": "Nur durch die Zeit, die die Scheibe benötigt, um den richtigen Sektor unter den Lesekopf zu rotieren",
            "C": "Sowohl A als auch B",
            "D": "Wird nur durch die Schnittstelle zwischen Festplattencontroller und Southbridge bestimmt"
          },
          "correctAnswer": "C"
        },
        {
          "id": "5.2",
          "text": "Die Steigerung der CPU-Verarbeitungsgeschwindigkeit im Verhältnis zur Steigerung der Speicherbandbreite des RAM ist seit 1980:",
          "type": "single",
          "options": {
            "A": "Gestiegen",
            "B": "Gesunken",
            "C": "Gleich geblieben",
            "D": "Der Takt der CPU ist zwar gestiegen, das Verhältnis aber gesunken, da die CPU mehr Takte pro Verarbeitungsschritt benötigt"
          },
          "correctAnswer": "A"
        },
        {
          "id": "5.3",
          "text": "Die Bandbreite des L1 im Vergleich zum L2 Cache:",
          "type": "single",
          "options": {
            "A": "Vergrößert sich um ca. 500%",
            "B": "Vergrößert sich um ca. 5000%",
            "C": "Verringert sich um 10%",
            "D": "Ist konstant"
          },
          "correctAnswer": "A"
        },
        {
          "id": "5.4",
          "text": "Die Wahl einer Datenstruktur für eine Problemlösung:",
          "type": "single",
          "options": {
            "A": "Wird nur durch das Problem beeinflusst",
            "B": "Wird nur durch die Rechnerarchitektur beeinflusst",
            "C": "Wird sowohl durch das Problem als auch die Rechnerarchitektur beeinflusst",
            "D": "Hängt im Wesentlichen von der Verfügbarkeit der Datenstruktur in der Programmiersprache ab"
          },
          "correctAnswer": "C"
        },
        {
          "id": "5.5",
          "text": "Für L1 und L2 Cache gilt bei der x86 Architektur:",
          "type": "single",
          "options": {
            "A": "L2 ist als „Harvard-Cache“, L1 als „von-Neumann-Cache“ organisiert",
            "B": "L1 und L2 sind als „von-Neumann-Cache“ organisiert",
            "C": "L1 ist als „Harvard-Cache“, L2 als „von-Neumann-Cache“ organisiert",
            "D": "L1 und L2 sind als „Harvard-Cache“ organisiert"
          },
          "correctAnswer": "C"
        },
        {
          "id": "5.6",
          "text": "Die Leistungsmessung bei Caches erfolgt durch Messung:",
          "type": "single",
          "options": {
            "A": "Der Mittleren Bandbreite (ABW)",
            "B": "Der Mittleren Wartezeit (AWT)",
            "C": "Der Mittleren Zugriffszeit (AAT)",
            "D": "Der Minimale Zugriffszeit (MAT)",
            "E": "Der Maximalen Bandbreite (MBW)"
          },
          "correctAnswer": "C"
        },
        {
          "id": "5.7",
          "text": "Bei einer heute üblichen Rechnerarchitektur (z.B. x86) verbessert sich die mittlere Zugriffszeit bei Nutzung einer Cache-Hierarchie aus L1, L2 und L3 Cache im Vergleich zum direkten Zugriff auf die Daten im Hauptspeicher:",
          "type": "single",
          "options": {
            "A": "Um ca. 5%",
            "B": "Um ca. 50%",
            "C": "Um ca. 500%",
            "D": "Um ca. 5000%",
            "E": "Um ca. 50000%"
          },
          "correctAnswer": "D"
        },
        {
          "id": "5.8",
          "text": "Bei einem voll assoziativen Cache benötigt man für die Auflösung das richtigen Cache Sets:",
          "type": "single",
          "options": {
            "A": "Ein Bit",
            "B": "*Nicht erkennbare Antwort*",
            "C": "Kein Bit",
            "D": "*Nicht erkennbare Antwort*"
          },
          "correctAnswer": "C"
        },
        {
          "id": "5.9",
          "text": "Die benötigte Anzahl b Bits zur Adressierung der s Sets berechnet sich zu:",
          "type": "single",
          "options": {
            "A": "b = n (n = Anzahl der Cache Lines)",
            "B": "b = s",
            "C": "b = log(s)",
            "D": "b = ln(s)",
            "E": "b = ld(s)"
          },
          "correctAnswer": "E"
        },
        {
          "id": "5.10",
          "text": "Ein n-fach assoziativer Cache:",
          "type": "single",
          "options": {
            "A": "Ist die optimale Cache-Auslegung",
            "B": "Ist stets schneller als ein direct mapped cache",
            "C": "Ist tendenziell schneller als ein direct mapped cache",
            "D": "Ist tendenziell langsamer als ein direct mapped cache"
          },
          "correctAnswer": "D"
        },
        {
          "id": "5.11",
          "text": "Ein n-fach assoziativer Cache (2):",
          "type": "single",
          "options": {
            "A": "Ist hinsichtlich Speichernutzung effizienter als ein direct-mapped cache",
            "B": "Ist hinsichtlich Speichernutzung ineffizienter als ein direct-mapped cache",
            "C": "Ist hinsichtlich Speichernutzung gleich ein direct-mapped cache"
          },
          "correctAnswer": "A"
        },
        {
          "id": "5.12",
          "text": "Die Verdrängungsstrategie LRU verdrängt:",
          "type": "single",
          "options": {
            "A": "Die am wenigsten genutzte Cache-Line",
            "B": "Die wenigsten in letzter Zeit genutzte Cache-Line",
            "C": "Die älteste Cache Line",
            "D": "Die jüngste Cache Line"
          },
          "correctAnswer": "B"
        },
        {
          "id": "5.13",
          "text": "Das „dirty bit“ zeigt an:",
          "type": "single",
          "options": {
            "A": "Dass in der Cache-Line ein Fehler aufgetreten ist",
            "B": "Dass mindestens ein Datum in der Cache-Line geändert wurde",
            "C": "Dass alle Daten in der Cache-Line geändert wurden",
            "D": "Dass alle Daten im Hauptspeicher gegenüber der Cache-Line geändert wurden"
          },
          "correctAnswer": "B"
        },
        {
          "id": "5.14",
          "text": "Bei der write-back Strategie:",
          "type": "single",
          "options": {
            "A": "Werden beim Verdrängen die geänderten Daten eine Ebene höher kopiert",
            "B": "Wird beim Verdrängen die geänderte Cache-Line eine Ebene höher kopiert",
            "C": "Werden die Daten beim Schreiben sofort eine Ebene höher kopiert",
            "D": "Wird die Cache-Line beim Schreiben sofort eine Ebene höher kopiert"
          },
          "correctAnswer": "B"
        },
        {
          "id": "5.15",
          "text": "Sekundärspeicher wird eingesetzt:",
          "type": "single",
          "options": {
            "A": "Um den Speicherzugriff zu beschleunigen",
            "B": "Um den Speicherplatz kostengünstig zu erweitern",
            "C": "Um die CPU zu entlasten",
            "D": "Um die Kommunikation zwischen verschiedenen Prozessoren zu ermöglichen"
          },
          "correctAnswer": "B"
        },
        {
          "id": "5.16",
          "text": "Um eine MMU zu nutzen teilt man den Speicher:",
          "type": "single",
          "options": {
            "A": "In gleich große Seiten (pages) einer festen Größe auf",
            "B": "In gleich große Seiten (pages) in exakt derselben Größe wie eine Cache-Line auf",
            "C": "In Seiten passender, variabler Größe auf",
            "D": "In einen Daten- und einen Instruktionsspeicher auf"
          },
          "correctAnswer": "A"
        }
      ],
      "hints": [
        "Die Fragen können Single oder Multiple-Choice sein",
        "Bei Multiple-Choice werden nur komplett richtige Aufgaben bepunktet!!!",
        "Bei teilweise richtigen oder falschen Angaben gibt es dementsprechend 0 Punkte"
      ]
    },
    {
      "id": "6/7",
      "title": "K6/7 – Betriebssysteme/Verwaltung von Prozessen und Threads",
      "description": "Covers operating system principles, process and thread management, and scheduling strategies.",
      "questions": [
        {
          "id": "6.1",
          "text": "Beim Stapelbetrieb werden die Prozesse nachfolgendem Prinzip abgearbeitet:",
          "type": "single",
          "options": {
            "A": "LIFO",
            "B": "FIFO",
            "C": "LRU",
            "D": "MRU"
          },
          "correctAnswer": "B"
        },
        {
          "id": "6.2",
          "text": "Der Unterschied zwischen Mehrprogramm- und Mehrbenutzerbetrieb liegt:",
          "type": "single",
          "options": {
            "A": "In der Anzahl der Ein-/Ausgabeeinheiten",
            "B": "Der bereit gestellten Schnittstellen",
            "C": "Der Abgrenzung einiger Systemressourcen",
            "D": "Es gibt keinen Unterschied"
          },
          "correctAnswer": "C"
        },
        {
          "id": "6.3",
          "text": "Das Ziel von Multiprocessing ist:",
          "type": "single",
          "options": {
            "A": "Die bestmögliche Ausnutzung der Rechnerressourcen",
            "B": "Die Verkürzung der Antwortzeiten von Prozessen",
            "C": "Die Reduktion des Speicherverbrauchs von Prozessen",
            "D": "Die Beschleunigung der Abarbeitung von Prozessen"
          },
          "correctAnswer": "A"
        },
        {
          "id": "6.4",
          "text": "Ein Prozesskontext speichert:",
          "type": "single",
          "options": {
            "A": "Den Programmcode",
            "B": "SP, PC, CPU-Register",
            "C": "Die Dateizustände",
            "D": "Die Benutzerdaten"
          },
          "correctAnswer": "B"
        },
        {
          "id": "6.5",
          "text": "Beim Aufruf von fork():",
          "type": "single",
          "options": {
            "A": "Halbiert sich der Speicherbedarf des neuen Prozesses",
            "B": "Verdoppelt sich der Speicherbedarf des neuen Prozesses",
            "C": "Ist der Speicherbedarf in etwa gleich dem des erzeugenden Prozesses",
            "D": "Kann man ohne weitere Informationen keine Aussage über den Speicherbedarf in fork() treffen"
          },
          "correctAnswer": "D"
        },
        {
          "id": "6.6",
          "text": "Zur Speicherung von Prozesskontexten im Zustand „ready“ oder „blocked“:",
          "type": "single",
          "options": {
            "A": "Verwaltet das BS jeweils eine separate Queue (Warteschlange)",
            "B": "Verwaltet das BS eine gemeinsame Queue",
            "C": "Verwaltet das BS jeweils ein separaten Stack (LIFO)",
            "D": "Verwaltet das BS einen gemeinsamen Stack (LIFO)"
          },
          "correctAnswer": "A"
        },
        {
          "id": "6.7",
          "text": "Das Programm zur Formatierung von Datenträgern gehört:",
          "type": "single",
          "options": {
            "A": "Zu den Anwendungsprogrammen",
            "B": "Zu den Dienstprogrammen eines BS",
            "C": "Zu den Treibern eines BS",
            "D": "Zu den Systemprogrammen eines BS"
          },
          "correctAnswer": "A"
        },
        {
          "id": "6.8",
          "text": "Die Kombination von BS-Kern und Gerätetreibern:",
          "type": "single",
          "options": {
            "A": "Vermeidet Fehler bei der Ansteuerung von Geräten",
            "B": "Erfordert bei neuen Hardwarearchitekturen eine Neuprogrammierung der Anwendung",
            "C": "Stellt einheitliche Schnittstellen zu Geräten zur Verfügung",
            "D": "Erlaubt stets eine vollständige Kontrolle der Geräte durch die Anwendungsprogramme"
          },
          "correctAnswer": "C"
        },
        {
          "id": "6.9",
          "text": "Das Erzeugen eines Threads im Vergleich zum Erzeugen eines Prozesses mit fork() benötigt:",
          "type": "single",
          "options": {
            "A": "Weniger Speicher",
            "B": "Annährend gleich viel Speicher",
            "C": "Mehr Speicher"
          },
          "correctAnswer": "A"
        },
        {
          "id": "6.10",
          "text": "Neben einem Stack Pointer benötigt ein Thread:",
          "type": "single",
          "options": {
            "A": "Nur einen separaten Heap",
            "B": "Nur einen separaten Stack",
            "C": "Eine separaten Stack und einen separaten Heap",
            "D": "Sonst nichts"
          },
          "correctAnswer": "B"
        },
        {
          "id": "6.11",
          "text": "Die Ausführungszeit eines Prozesses bezeichnet:",
          "type": "single",
          "options": {
            "A": "Nur die Zeit der CPU-Nutzung",
            "B": "Die Zeit der CPU-Nutzung plus die Zeit in der Ready Warteschlange",
            "C": "Die Gesamte verbrauchte Zeit, einschließlich aller Wartezeiten",
            "D": "Die Gesamte verbrauchte Zeit, einschließlich aller Wartezeiten minus dem Schedulingoverhead"
          },
          "correctAnswer": "C"
        },
        {
          "id": "6.12",
          "text": "Die Scheduling Strategie SJF führt im Vergleich zu FCFS:",
          "type": "single",
          "options": {
            "A": "Einer längeren mittleren Ausführungszeit",
            "B": "Einer in etwa gleich langen mittleren Ausführungszeit",
            "C": "Einer kürzeren mittleren Ausführungszeit"
          },
          "correctAnswer": "C"
        },
        {
          "id": "6.13",
          "text": "Beim präemptiven Multitasking ist die Dauer einer kompletten Zeitscheibe:",
          "type": "single",
          "options": {
            "A": "Von der Anzahl der Threads unabhängig",
            "B": "Von der Anzahl der Threads abhängig",
            "C": "Vom Speicherbedarf der Threads abhängig",
            "D": "Vom Speicherbedarf und der Anzahl der Threads abhängig"
          },
          "correctAnswer": "B"
        },
        {
          "id": "6.14",
          "text": "Dynamic Priority Round Robin:",
          "type": "single",
          "options": {
            "A": "Berechnet der Scheduler die Priorität eines Threads nach dem Ablauf des Timeslots neu",
            "B": "Berechnet der Scheduler die Priorität der Threads mit der niedrigsten Basispriorität nach dem Ablauf des Timeslots neu",
            "C": "Berechnet der Scheduler die Priorität der Threads mit der niedrigsten dynamischen Priorität nach dem Ablauf des Timeslots neu",
            "D": "Berechnet der Scheduler die Priorität aller Threads nach dem Ablauf des Timeslots neu"
          },
          "correctAnswer": "D"
        }
      ],
      "hints": [
        "Die Fragen können Single oder Multiple-Choice sein",
        "Bei Multiple-Choice werden nur komplett richtige Aufgaben bepunktet!!!",
        "Bei teilweise richtigen oder falschen Angaben gibt es dementsprechend 0 Punkte"
      ]
    },
    {
      "id": "8",
      "title": "K8 – Synchronisation von Prozessen und Threads",
      "description": "Focuses on synchronization techniques for processes and threads, including race conditions, deadlocks, and interprocess communication.",
      "questions": [
        {
          "id": "8.1",
          "text": "Beim Verarbeiten mehrere Threads kann der Scheduler einen Thread unterbrechen:",
          "type": "single",
          "options": {
            "A": "Am Anfang einer Funktion",
            "B": "Am Ende einer Funktion (bei ret)",
            "C": "Nach einem beliebigen Maschinen-Befehl",
            "D": "Nach einem beliebigen Maschinen-Befehl (außer cli)",
            "E": "Innerhalb eines beliebigen Maschinen-Befehl"
          },
          "correctAnswer": "D"
        },
        {
          "id": "8.2",
          "text": "Greifen mehrere Threads auf eine gemeinsam genutzte Variable zu:",
          "type": "single",
          "options": {
            "A": "Sind atomare Zugriffe immer erfolgreich",
            "B": "Sind atomare Zugriffe manchmal erfolgreich",
            "C": "Gibt es keine atomaren Zugriffe",
            "D": "Ist eine Synchronisation des Zugriffs zwingend notwendig"
          },
          "correctAnswer": "A"
        },
        {
          "id": "8.3",
          "text": "Beim Auftreten einer Race Condition:",
          "type": "single",
          "options": {
            "A": "Hat ein Mutex nicht funktioniert",
            "B": "Hat ein Thread einen anderen an beliebiger Stelle überholt",
            "C": "Gab es einen Konflikt beim Zugriff auf gemeinsam genutzte Daten",
            "D": "Gab es einen Konflikt beim Zugriff auf getrennt genutzte Daten"
          },
          "correctAnswer": "C"
        },
        {
          "id": "8.4",
          "text": "Bereiche, die dem Risiko einer Race Condition ausgesetzt sind, nennt man:",
          "type": "single",
          "options": {
            "A": "Critical regions",
            "B": "Critical condition",
            "C": "Race region",
            "D": "Race section"
          },
          "correctAnswer": "A"
        },
        {
          "id": "8.5",
          "text": "Unter fairness versteht man im Zusammenhang mit einer Critical Region:",
          "type": "single",
          "options": {
            "A": "Das sich zu einem Zeitpunkt nur ein Thread in einer Critical Region befindet",
            "B": "Das alle Threads die gleiche Anzahl CPUs nutzen können",
            "C": "Das sich die Threads nie blockieren",
            "D": "Das jeder Thread die Critical Region irgendwann betreten kann"
          },
          "correctAnswer": "D"
        },
        {
          "id": "8.6",
          "text": "Ein Spin-Lock ist vergleichbar mit:",
          "type": "single",
          "options": {
            "A": "DMA",
            "B": "ISR",
            "C": "Polling",
            "D": "MMU"
          },
          "correctAnswer": "C"
        },
        {
          "id": "8.7",
          "text": "Bei Mutal Exclusion mittels gesperrter Interrupts:",
          "type": "single",
          "options": {
            "A": "Läuft der Scheduler weiter",
            "B": "Ist kein Timer-based wait möglich",
            "C": "Werden von anderen Threads genutzte Ressourcen automatisch freigegeben",
            "D": "Sind automatisch alle Instruktionen atomar"
          },
          "correctAnswer": "B"
        },
        {
          "id": "8.8",
          "text": "Die Funktion try_lock() bei der Nutzung eines Mutexes:",
          "type": "single",
          "options": {
            "A": "Gibt true zurück, wenn der Mutex genommen wurde",
            "B": "Gibt false zurück, wenn der Mutex genommen wurde",
            "C": "Gibt true zurück, wenn der Mutex existiert",
            "D": "Gibt false zurück, wenn der Mutex existiert"
          },
          "correctAnswer": "A"
        },
        {
          "id": "8.9",
          "text": "Warum ist das Ignorieren eines Deadlocks eine Möglichkeit mit Deadlocks umzugehen?",
          "type": "single",
          "options": {
            "A": "Weil es keine andere Möglichkeit gibt das zu tun",
            "B": "Weil die Beseitigung der das Deadlock verursachenden Situation nicht immer möglich ist",
            "C": "Weil eine Behebung in keinem Fall wirtschaftlich sinnvoll ist",
            "D": "Weil Deadlocks sich in der Regel irgendwann von selbst auflösen"
          },
          "correctAnswer": "B"
        },
        {
          "id": "8.10",
          "text": "Ein potenzielles Deadlock lässt sich erkennen:",
          "type": "single",
          "options": {
            "A": "Durch einen zyklusfreien Betriebsmittelgraphen",
            "B": "Durch eine geringe Auslastung der CPU",
            "C": "Durch eine lange Wartezeit auf Betriebsmittel",
            "D": "Durch Zyklen im Betriebsmittelgraphen"
          },
          "correctAnswer": "D"
        },
        {
          "id": "8.11",
          "text": "Das aktive Entziehen von Betriebsmitteln zur Deadlockbeseitigung ist schwierig weil:",
          "type": "single",
          "options": {
            "A": "Mehr als ein Prozess das Betriebsmittel hält",
            "B": "Es für jedes Betriebsmittel unterschiedlich gehandhabt werden muss",
            "C": "Die Prozesse das aktiv unterstützen müssen",
            "D": "Das Betriebssystem bei einem Deadlock die Kontrolle über die Betriebsmittel verloren hat"
          },
          "correctAnswer": "C"
        },
        {
          "id": "8.12",
          "text": "Blackboards als Mittel zur Interprozesskommunikation arbeiten nach dem Verfahren:",
          "type": "single",
          "options": {
            "A": "Publish-Subscribe",
            "B": "Master-Slave",
            "C": "Farmer-Worker",
            "D": "Fire-And-Forget"
          },
          "correctAnswer": "A"
        },
        {
          "id": "8.13",
          "text": "Unix Pipes:",
          "type": "single",
          "options": {
            "A": "Sind immer anonym",
            "B": "Sind immer benannt",
            "C": "Sind unidirektional",
            "D": "Sind bidirektional"
          },
          "correctAnswer": "C"
        },
        {
          "id": "8.14",
          "text": "Unix Pipes arbeiten nach dem Prinzip:",
          "type": "single",
          "options": {
            "A": "LIFO",
            "B": "FIFO",
            "C": "Random Access",
            "D": "LILO"
          },
          "correctAnswer": "B"
        }
      ],
      "hints": [
        "Die Fragen können Single oder Multiple-Choice sein",
        "Bei Multiple-Choice werden nur komplett richtige Aufgaben bepunktet!!!",
        "Bei teilweise richtigen oder falschen Angaben gibt es dementsprechend 0 Punkte"
      ]
    },
    {
      "id": "9",
      "title": "K9 – Speicherverwaltung",
      "description": "Covers memory management techniques, including garbage collection, fragmentation, and allocation strategies in operating systems.",
      "questions": [
        {
          "id": "9.1",
          "text": "Der Garbage Collector bei Java:",
          "type": "single",
          "options": {
            "A": "Ist Teil des Anwendungsprozesses",
            "B": "Wird vom Betriebssystem gesteuert",
            "C": "Kann nur auf Systemen mit einer MMU genutzt werden",
            "D": "Erfordert die Nutzung von synchronized Methoden in der jvm"
          },
          "correctAnswer": "A"
        },
        {
          "id": "9.2",
          "text": "Wenn mehrere Programme gleichzeitig im System laufen:",
          "type": "single",
          "options": {
            "A": "Muss die Speicherverwaltung immer ein Buddy System nutzen",
            "B": "Geht das nur über verkettete Listen",
            "C": "Benötigt das Betriebssystem neben einer Belegtkennung weitere Informationen",
            "D": "Können die Prozesse nur via Shared Memory miteinander kommunizieren"
          },
          "correctAnswer": "C"
        },
        {
          "id": "9.3",
          "text": "Ein System das maximal 128 Prozesse verwaltet benötigt für einen Eintrag in einer Speicherbelegungstabelle:",
          "type": "single",
          "options": {
            "A": "Mindestens ein Byte",
            "B": "Mindestens zwei Byte",
            "C": "Mindestens drei Byte",
            "D": "Mindestens vier Byte"
          },
          "correctAnswer": "A"
        },
        {
          "id": "9.4",
          "text": "Interne Fragmentierung entsteht, weil:",
          "type": "single",
          "options": {
            "A": "Mehr Pages belegt werden als tatsächlich benötigt",
            "B": "Speicheranforderungen ggf. nicht mehr bedient werden, weil nur noch kleine Blöcke zur Verfügung stehen",
            "C": "Auch bei kleinen Speichermengen immer ein ganzer Block alloziert wird",
            "D": "Eine Zusammenführung von kleinen Blöcken nicht stattfindet"
          },
          "correctAnswer": "C"
        },
        {
          "id": "9.5",
          "text": "Bei der Belegungsstrategie Best Fit entstehen sehr kleine Fragmente, weil:",
          "type": "single",
          "options": {
            "A": "Immer vom Anfang der Speicherliste gesucht wird",
            "B": "Immer der kleinste gerade noch passende Block genommen wird",
            "C": "Immer der größte passende Block genommen wird",
            "D": "In mehreren Listen gesucht wird"
          },
          "correctAnswer": "B"
        }
      ],
      "hints": [
        "Die Fragen können Single oder Multiple-Choice sein",
        "Bei Multiple-Choice werden nur komplett richtige Aufgaben bepunktet!!!",
        "Bei teilweise richtigen oder falschen Angaben gibt es dementsprechend 0 Punkte"
      ]
    }
  ]
};