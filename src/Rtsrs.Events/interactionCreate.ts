import { InteractionTypes } from '../../deps.ts';
import { Bot } from '../../rtsrs.ts';
import log from '../Rtsrs.Utils/logger.ts';

Bot.events.interactionCreate = (_, interaction) => {
  if (!interaction.data) return;

  switch (interaction.type) {
    case InteractionTypes.ApplicationCommand:
      log.info(
        `[Application Command] ${interaction.data.name} command executed.`
      );
      Bot.commands.get(interaction.data.name!)?.execute(Bot, interaction);
      break;
  }
};
