import { Container } from "./styles";

import logoKing from "../../assets/imgHeader/logoKing.png"

export function Header() {
    return (
        <Container>
            <img src={logoKing} className="logoKing" alt="Logo King Solutions" />
            <div>                
                <h1>Desenvolvimento de WebSites</h1>
                <p>Com mais de 5 anos entregando websites a King Solutions une experiência e inovação para o sucesso dos seus projetos.</p>
            </div>
        </Container>
    )
}