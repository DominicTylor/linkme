import React, { useState } from 'react';
import { Icon } from 'precise-ui';

import { InformationStyled, Game } from './Information.styled';

const Information: React.FC = () => {
    const [showGame, setShowGame] = useState<boolean>(false);

    return (
        <>
            <InformationStyled>
                The site helps to create short links. Registered users can see their links in the personal page, as well
                as create password-protected links.
            </InformationStyled>
            <Game>
                {showGame ? (
                    <iframe
                        src="http://project.someonedev.ru/spaceInvaders/"
                        frameBorder="0"
                        width="800"
                        height="460"
                    />
                ) : (
                    <Icon name="Info" onClick={() => setShowGame(true)} />
                )}
            </Game>
        </>
    );
};

export default React.memo(Information);
