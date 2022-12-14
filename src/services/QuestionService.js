import axios from 'axios'

export const getQuestion = async () => {
    const assistant_url = 'someBasicUrl';
    const load_exam_url = 'someUrlToLoadQuestion';
    const type_of_exam = 'typeOfExam';
    return "Nice question";
    // return await axios.post(assistant_url.concat(load_exam_url), {exam: type_of_exam})
    //     .then(res => res.data)
    //     .catch(error => console.log(error));
}
