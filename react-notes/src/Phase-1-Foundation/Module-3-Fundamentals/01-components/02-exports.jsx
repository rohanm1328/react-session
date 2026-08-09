import CardComp, {ButtonComp, InputComp} from './01-components'

function ExportComp(){
    return (
        <div>
            <div>
                <h3>Input Component</h3>
                <InputComp/>
            </div>
            <div>
                <h3>Button Component</h3>
                <ButtonComp/>
            </div>
            <div>
                <h3>Card Component</h3>
                <CardComp/>
            </div>
        </div>
    );
}

export default ExportComp;