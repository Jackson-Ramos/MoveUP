import './student_profile.css'

function StudentProfile() {
    return (
        <>

            <section id="container">

                <form action="">

                    <section className='section_one'>
                        <label htmlFor="goals">Objetivo:
                            <input type="text" name="goals" id="goals" placeholder='Objetivo' />
                        </label>
                    </section>

                    <section id='section_two'>

                        <label htmlFor="birthDate">
                            Data de nascimento:
                            <input type="date" name="birthDate" id="birthDate" />
                        </label>

                        <label htmlFor="gender">Gênero:
                            <select name="gender" id="gender">
                                <option value="">Seleciona</option>
                                <option value="masculine">Masculino</option>
                                <option value="feminine">Feminino</option>
                                <option value="other">Outro</option>
                            </select>
                        </label>

                        <label htmlFor="currentHeight">Altura:
                            <input type="number" name="currentHeight" id="currentHeight" />
                        </label>

                        <label htmlFor="currentWeight">Peso:
                            <input type="number" name="currentWeight" id="currentWeight" />
                        </label>
                    </section>

                    <section id="section_three">
                        <label htmlFor="limitations">Possui alguma limitação?
                            <textarea name="limitations" id="limitations"></textarea>
                        </label>
                    </section>
                </form>

            </section>

        </>
    )
}

export default StudentProfile