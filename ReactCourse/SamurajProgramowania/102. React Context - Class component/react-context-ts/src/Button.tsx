import React, { PureComponent } from 'react'
import { AppContext, IMyContextLogged } from './AppContext';

class Button extends PureComponent {
    static override contextType = AppContext;
    override context!: React.ContextType<typeof AppContext>;
    override render() {
        return (
            <>
                <AppContext.Consumer>
                    {
                        ({ toggleLoggedState }: IMyContextLogged) => {
                            return (
                                <button onClick={toggleLoggedState}>Toggle user state</button>
                            )
                        }
                    }
                </AppContext.Consumer>

                <button onClick={this.context.toggleLoggedState}>Other context</button>
            </>
        );
    }
}

export default Button;