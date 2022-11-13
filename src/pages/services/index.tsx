import { Container, ContainerSection } from "./styles";

import imgSection1 from "../../assets/imgServices/img1.jpg"
import imgSection2 from "../../assets/imgServices/img2.webp"
import imgSection3 from "../../assets/imgServices/img3.png"

export function Services() {
    return (
        <Container>
            <h2>SERVIÇOS</h2>

            <ContainerSection>
                <div>
                    <h3>Design para sites com foco na melhor experiência dos usuários.</h3>
                    
                    <p>O Design de Interfaces e o UX Design determinam como as pessoas interagem e controlam um site, aplicativo ou loja virtual. A maneira como são projetados os componentes da interface pode influenciar diretamente no sucesso de um projeto digital.</p>

                    <p>Usamos fundamentos de design e softwares especializados em construção de fluxos, protótipos e interfaces digitais para construir projetos gráficos digitais que sejam mais fáceis de entender, mais  cessíveis e que tragam mais resultados para sua empresa.</p>
                </div>

                <img src={imgSection1} alt="" />
            </ContainerSection>

            <ContainerSection>
                <div>
                    <h3>Desenvolvimento Ágil</h3>

                    <p>O desenvolvimento de websites mudou muito nos últimos anos.As equipes modernas são 100% digitais e ágeis.Saiba como a King Solutions pode ajudar a sua empresa a entrar na era digital ágil.</p>
                </div>

                <img src={imgSection2} alt="" />
            </ContainerSection>

            <ContainerSection>
                <div>
                    <h3>Validação</h3>

                    <p>Aprendemos com o processo e nos adaptamos rapidamente à novos cenários para iniciarmos um planejamento ainda mais assertivo para os ciclos seguinte</p>
                </div>

                <img src={imgSection3} alt="" />
            </ContainerSection>
        </Container>
    )
}