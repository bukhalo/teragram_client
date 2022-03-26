import { User } from "./user.ts";
import { Chat } from "./chat.ts";
import { MessageEntity } from "./message_entity.ts";
import { Animation } from "./animation.ts";
import { Audio } from "./audio.ts";
import { Sticker } from "./sticker.ts";
import { Voice } from "./voice.ts";
import { Poll } from "./poll.ts";
import { PhotoSize } from "./photo_size.ts";
import { Document } from "./document.ts";
import { Video } from "./video.ts";
import { VideoNote } from "./video_note.ts";
import { Contact } from "./contact.ts";
import { Dice } from "./dice.ts";
import { Game } from "./game.ts";
import { Venue } from "./venue.ts";
import { Location } from "./location.ts";
import { MessageAutoDeleteTimerChanged } from "./message_auto_delete_timer_changed.ts";
import { Invoice } from "./invoice.ts";
import { SuccessfulPayment } from "./successful_payment.ts";
import { PassportData } from "./passport_data.ts";
import { ProximityAlertTriggered } from "./proximity_alert_triggered.ts";
import { VoiceChatScheduled } from "./voice_chat_scheduled.ts";
import { VoiceChatStarted } from "./voice_chat_started.ts";
import { VoiceChatEnded } from "./voice_chat_ended.ts";
import { VoiceChatParticipantsInvited } from "./voice_chat_participants_invited.ts";
import { InlineKeyboardMarkup } from "./inline_keyboard_markup.ts";

/**
 * This object represents a message.
 *
 * @see https://core.telegram.org/bots/api#message
 */
export interface Message {
  /**
   * Unique message identifier inside this chat
   */
  readonly message_id: number;

  /**
   * Sender of the message; empty for messages sent to channels. For backward compatibility, the field contains a fake
   * sender user in non-channel chats, if the message was sent on behalf of a chat.
   */
  readonly from?: User;

  /**
   * Sender of the message, sent on behalf of a chat. For example, the channel itself for channel posts, the supergroup
   * itself for messages from anonymous group administrators, the linked channel for messages automatically forwarded to
   * the discussion group. For backward compatibility, the field from contains a fake sender user in non-channel chats,
   * if the message was sent on behalf of a chat.
   */
  readonly sender_chat?: Chat;

  /**
   * Date the message was sent in Unix time
   */
  readonly date: string;

  /**
   * Conversation the message belongs to
   */
  readonly chat: Chat;

  /**
   * For forwarded messages, sender of the original message
   */
  readonly forward_from?: User;

  /**
   * For messages forwarded from channels or from anonymous administrators, information about the original sender chat
   */
  readonly forward_from_chat?: Chat;

  /**
   * For messages forwarded from channels, identifier of the original message in the channel
   */
  readonly forward_from_message_id?: number;

  /**
   * For forwarded messages that were originally sent in channels or by an anonymous chat administrator, signature of
   * the message sender if present
   */
  readonly forward_signature?: string;

  /**
   * Sender's name for messages forwarded from users who disallow adding a link to their account in forwarded messages
   */
  readonly forward_sender_name?: string;

  /**
   * For forwarded messages, date the original message was sent in Unix time
   */
  readonly forward_date?: number;

  /**
   * True, if the message is a channel post that was automatically forwarded to the connected discussion group
   */
  readonly is_automatic_forward: true;

  /**
   * For replies, the original message. Note that the Message object in this field will not contain further
   * reply_to_message fields even if it itself is a reply.
   */
  readonly reply_to_message?: Message;

  /**
   * Bot through which the message was sent
   */
  readonly via_bot?: User;

  /**
   * Date the message was last edited in Unix time
   */
  readonly edit_date?: number;

  /**
   * True, if the message can't be forwarded
   */
  readonly has_protected_content?: true;

  /**
   * The unique identifier of a media message group this message belongs to
   */
  readonly media_group_id?: string;

  /**
   * Signature of the post author for messages in channels, or the custom title of an anonymous group administrator
   */
  readonly author_signature?: string;

  /**
   * For text messages, the actual UTF-8 text of the message, 0-4096 characters
   */
  readonly text?: string;

  /**
   * For text messages, special entities like usernames, URLs, bot commands, etc. that appear in the text
   */
  readonly entities?: MessageEntity[];

  /**
   * Message is an animation, information about the animation. For backward compatibility, when this field is set, the
   * document field will also be set
   */
  readonly animation?: Animation;

  /**
   * Message is an audio file, information about the file
   */
  readonly audio?: Audio;

  /**
   * Message is a general file, information about the file
   */
  readonly document?: Document;

  /**
   * Message is a photo, available sizes of the photo
   */
  readonly photo?: PhotoSize[];

  /**
   * Message is a sticker, information about the sticker
   */
  readonly sticker?: Sticker;

  /**
   * Message is a video, information about the video
   */
  readonly video?: Video;

  /**
   * Message is a video note, information about the video message
   */
  readonly video_note?: VideoNote;

  /**
   * Message is a voice message, information about the file
   */
  readonly voice?: Voice;

  /**
   * Caption for the animation, audio, document, photo, video or voice, 0-1024 characters
   */
  readonly caption?: string;

  /**
   * For messages with a caption, special entities like usernames, URLs, bot commands, etc. that appear in the caption
   */
  readonly caption_entities?: MessageEntity[];

  /**
   * Message is a shared contact, information about the contact
   */
  readonly contact?: Contact;

  /**
   * Message is a dice with random value
   */
  readonly dice?: Dice;

  /**
   * Message is a game, information about the game.
   */
  readonly game?: Game;

  /**
   * Message is a native poll, information about the poll
   */
  readonly poll?: Poll;

  /**
   * Message is a venue, information about the venue. For backward compatibility, when this field is set, the location
   * field will also be set
   */
  readonly venue?: Venue;

  /**
   * Message is a shared location, information about the location
   */
  readonly location?: Location;

  /**
   * New members that were added to the group or supergroup and information about them (the bot itself may be one of
   * these members)
   */
  readonly new_chat_members?: User[];

  /**
   * A member was removed from the group, information about them (this member may be the bot itself)
   */
  readonly left_chat_member?: User;

  /**
   * A chat title was changed to this value
   */
  readonly new_chat_title?: string;

  /**
   * A chat photo was change to this value
   */
  readonly new_chat_photo?: PhotoSize[];

  /**
   * Service message: the chat photo was deleted
   */
  readonly delete_chat_photo?: true;

  /**
   * Service message: the group has been created
   */
  readonly group_chat_created?: true;

  /**
   * Service message: the supergroup has been created. This field can't be received in a message coming through updates,
   * because bot can't be a member of a supergroup when it is created. It can only be found in reply_to_message if
   * someone replies to a very first message in a directly created supergroup.
   */
  readonly supergroup_chat_created?: true;

  /**
   * Service message: the channel has been created. This field can't be received in a message coming through updates,
   * because bot can't be a member of a channel when it is created. It can only be found in reply_to_message if someone
   * replies to a very first message in a channel.
   */
  readonly channel_chat_created?: true;

  /**
   * Service message: auto-delete timer settings changed in the chat
   */
  readonly message_auto_delete_timer_changed?: MessageAutoDeleteTimerChanged;

  /**
   * The group has been migrated to a supergroup with the specified identifier. This number may have more than 32
   * significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has
   * at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this
   * identifier.
   */
  readonly migrate_to_chat_id?: number;

  /**
   * The supergroup has been migrated from a group with the specified identifier. This number may have more than 32
   * significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has
   * at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this
   * identifier.
   */
  readonly migrate_from_chat_id?: number;

  /**
   * Specified message was pinned. Note that the Message object in this field will not contain further reply_to_message
   * fields even if it is itself a reply.
   */
  readonly pinned_message?: Message;

  /**
   * Message is an invoice for a payment, information about the invoice.
   */
  readonly invoice?: Invoice;

  /**
   * Message is a service message about a successful payment, information about the payment.
   */
  readonly successful_payment?: SuccessfulPayment;

  /**
   * The domain name of the website on which the user has logged in.
   */
  readonly connected_website?: string;

  /**
   * Telegram Passport data
   */
  readonly passport_data?: PassportData;

  /**
   * Service message. A user in the chat triggered another user's proximity alert while sharing Live Location.
   */
  readonly proximity_alert_triggered?: ProximityAlertTriggered;

  /**
   * Service message: voice chat scheduled
   */
  readonly voice_chat_scheduled?: VoiceChatScheduled;

  /**
   * Service message: voice chat started
   */
  readonly voice_chat_started?: VoiceChatStarted;

  /**
   * Service message: voice chat ended
   */
  readonly voice_chat_ended?: VoiceChatEnded;

  /**
   * Service message: new participants invited to a voice chat
   */
  readonly voice_chat_participants_invited?: VoiceChatParticipantsInvited;

  /**
   * Inline keyboard attached to the message. login_url buttons are represented as ordinary url buttons.
   */
  readonly reply_markup: InlineKeyboardMarkup;
}
