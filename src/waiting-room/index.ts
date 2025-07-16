/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/waiting_room
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WaitingRoomConfig extends cdktf.TerraformMetaArguments {
  /**
  * Only available for the Waiting Room Advanced subscription. Additional hostname and path combinations to which this waiting room will be applied. There is an implied wildcard at the end of the path. The hostname and path combination must be unique to this and all other waiting rooms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/waiting_room#additional_routes WaitingRoom#additional_routes}
  */
  readonly additionalRoutes?: WaitingRoomAdditionalRoutes[] | cdktf.IResolvable;
  /**
  * Configures cookie attributes for the waiting room cookie. This encrypted cookie stores a user's status in the waiting room, such as queue position.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/waiting_room#cookie_attributes WaitingRoom#cookie_attributes}
  */
  readonly cookieAttributes?: WaitingRoomCookieAttributes;
  /**
  * Appends a '_' + a custom suffix to the end of Cloudflare Waiting Room's cookie name(__cf_waitingroom). If `cookie_suffix` is "abcd", the cookie name will be `__cf_waitingroom_abcd`. This field is required if using `additional_routes`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/waiting_room#cookie_suffix WaitingRoom#cookie_suffix}
  */
  readonly cookieSuffix?: string;
  /**
  * Only available for the Waiting Room Advanced subscription. This is a template html file that will be rendered at the edge. If no custom_page_html is provided, the default waiting room will be used. The template is based on mustache ( https://mustache.github.io/ ). There are several variables that are evaluated by the Cloudflare edge:
  * 1. {{`waitTimeKnown`}} Acts like a boolean value that indicates the behavior to take when wait time is not available, for instance when queue_all is **true**.
  * 2. {{`waitTimeFormatted`}} Estimated wait time for the user. For example, five minutes. Alternatively, you can use:
  * 3. {{`waitTime`}} Number of minutes of estimated wait for a user.
  * 4. {{`waitTimeHours`}} Number of hours of estimated wait for a user (`Math.floor(waitTime/60)`).
  * 5. {{`waitTimeHourMinutes`}} Number of minutes above the `waitTimeHours` value (`waitTime%60`).
  * 6. {{`queueIsFull`}} Changes to **true** when no more people can be added to the queue.
  * 
  * To view the full list of variables, look at the `cfWaitingRoom` object described under the `json_response_enabled` property in other Waiting Room API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/waiting_room#custom_page_html WaitingRoom#custom_page_html}
  */
  readonly customPageHtml?: string;
  /**
  * The language of the default page template. If no default_template_language is provided, then `en-US` (English) will be used.
  * Available values: "en-US", "es-ES", "de-DE", "fr-FR", "it-IT", "ja-JP", "ko-KR", "pt-BR", "zh-CN", "zh-TW", "nl-NL", "pl-PL", "id-ID", "tr-TR", "ar-EG", "ru-RU", "fa-IR", "bg-BG", "hr-HR", "cs-CZ", "da-DK", "fi-FI", "lt-LT", "ms-MY", "nb-NO", "ro-RO", "el-GR", "he-IL", "hi-IN", "hu-HU", "sr-BA", "sk-SK", "sl-SI", "sv-SE", "tl-PH", "th-TH", "uk-UA", "vi-VN".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/waiting_room#default_template_language WaitingRoom#default_template_language}
  */
  readonly defaultTemplateLanguage?: string;
  /**
  * A note that you can use to add more details about the waiting room.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/waiting_room#description WaitingRoom#description}
  */
  readonly description?: string;
  /**
  * Only available for the Waiting Room Advanced subscription. Disables automatic renewal of session cookies. If `true`, an accepted user will have session_duration minutes to browse the site. After that, they will have to go through the waiting room again. If `false`, a user's session cookie will be automatically renewed on every request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/waiting_room#disable_session_renewal WaitingRoom#disable_session_renewal}
  */
  readonly disableSessionRenewal?: boolean | cdktf.IResolvable;
  /**
  * A list of enabled origin commands.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/waiting_room#enabled_origin_commands WaitingRoom#enabled_origin_commands}
  */
  readonly enabledOriginCommands?: string[];
  /**
  * The host name to which the waiting room will be applied (no wildcards). Please do not include the scheme (http:// or https://). The host and path combination must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/waiting_room#host WaitingRoom#host}
  */
  readonly host: string;
  /**
  * Only available for the Waiting Room Advanced subscription. If `true`, requests to the waiting room with the header `Accept: application/json` will receive a JSON response object with information on the user's status in the waiting room as opposed to the configured static HTML page. This JSON response object has one property `cfWaitingRoom` which is an object containing the following fields:
  * 1. `inWaitingRoom`: Boolean indicating if the user is in the waiting room (always **true**).
  * 2. `waitTimeKnown`: Boolean indicating if the current estimated wait times are accurate. If **false**, they are not available.
  * 3. `waitTime`: Valid only when `waitTimeKnown` is **true**. Integer indicating the current estimated time in minutes the user will wait in the waiting room. When `queueingMethod` is **random**, this is set to `waitTime50Percentile`.
  * 4. `waitTime25Percentile`: Valid only when `queueingMethod` is **random** and `waitTimeKnown` is **true**. Integer indicating the current estimated maximum wait time for the 25% of users that gain entry the fastest (25th percentile).
  * 5. `waitTime50Percentile`: Valid only when `queueingMethod` is **random** and `waitTimeKnown` is **true**. Integer indicating the current estimated maximum wait time for the 50% of users that gain entry the fastest (50th percentile). In other words, half of the queued users are expected to let into the origin website before `waitTime50Percentile` and half are expected to be let in after it.
  * 6. `waitTime75Percentile`: Valid only when `queueingMethod` is **random** and `waitTimeKnown` is **true**. Integer indicating the current estimated maximum wait time for the 75% of users that gain entry the fastest (75th percentile).
  * 7. `waitTimeFormatted`: String displaying the `waitTime` formatted in English for users. If `waitTimeKnown` is **false**, `waitTimeFormatted` will display **unavailable**.
  * 8. `queueIsFull`: Boolean indicating if the waiting room's queue is currently full and not accepting new users at the moment.
  * 9. `queueAll`: Boolean indicating if all users will be queued in the waiting room and no one will be let into the origin website.
  * 10. `lastUpdated`: String displaying the timestamp as an ISO 8601 string of the user's last attempt to leave the waiting room and be let into the origin website. The user is able to make another attempt after `refreshIntervalSeconds` past this time. If the user makes a request too soon, it will be ignored and `lastUpdated` will not change.
  * 11. `refreshIntervalSeconds`: Integer indicating the number of seconds after `lastUpdated` until the user is able to make another attempt to leave the waiting room and be let into the origin website. When the `queueingMethod` is `reject`, there is no specified refresh time —\_it will always be **zero**.
  * 12. `queueingMethod`: The queueing method currently used by the waiting room. It is either **fifo**, **random**, **passthrough**, or **reject**.
  * 13. `isFIFOQueue`: Boolean indicating if the waiting room uses a FIFO (First-In-First-Out) queue.
  * 14. `isRandomQueue`: Boolean indicating if the waiting room uses a Random queue where users gain access randomly.
  * 15. `isPassthroughQueue`: Boolean indicating if the waiting room uses a passthrough queue. Keep in mind that when passthrough is enabled, this JSON response will only exist when `queueAll` is **true** or `isEventPrequeueing` is **true** because in all other cases requests will go directly to the origin.
  * 16. `isRejectQueue`: Boolean indicating if the waiting room uses a reject queue.
  * 17. `isEventActive`: Boolean indicating if an event is currently occurring. Events are able to change a waiting room's behavior during a specified period of time. For additional information, look at the event properties `prequeue_start_time`, `event_start_time`, and `event_end_time` in the documentation for creating waiting room events. Events are considered active between these start and end times, as well as during the prequeueing period if it exists.
  * 18. `isEventPrequeueing`: Valid only when `isEventActive` is **true**. Boolean indicating if an event is currently prequeueing users before it starts.
  * 19. `timeUntilEventStart`: Valid only when `isEventPrequeueing` is **true**. Integer indicating the number of minutes until the event starts.
  * 20. `timeUntilEventStartFormatted`: String displaying the `timeUntilEventStart` formatted in English for users. If `isEventPrequeueing` is **false**, `timeUntilEventStartFormatted` will display **unavailable**.
  * 21. `timeUntilEventEnd`: Valid only when `isEventActive` is **true**. Integer indicating the number of minutes until the event ends.
  * 22. `timeUntilEventEndFormatted`: String displaying the `timeUntilEventEnd` formatted in English for users. If `isEventActive` is **false**, `timeUntilEventEndFormatted` will display **unavailable**.
  * 23. `shuffleAtEventStart`: Valid only when `isEventActive` is **true**. Boolean indicating if the users in the prequeue are shuffled randomly when the event starts.
  * 24. `turnstile`: Empty when turnstile isn't enabled. String displaying an html tag to display the Turnstile widget. Please add the `{{{turnstile}}}` tag to the `custom_html` template to ensure the Turnstile widget appears.
  * 25. `infiniteQueue`: Boolean indicating whether the response is for a user in the infinite queue.
  * 
  * An example cURL to a waiting room could be:
  * 
  * 	curl -X GET "https://example.com/waitingroom" \
  * 		-H "Accept: application/json"
  * 
  * If `json_response_enabled` is **true** and the request hits the waiting room, an example JSON response when `queueingMethod` is **fifo** and no event is active could be:
  * 
  * 	{
  * 		"cfWaitingRoom": {
  * 			"inWaitingRoom": true,
  * 			"waitTimeKnown": true,
  * 			"waitTime": 10,
  * 			"waitTime25Percentile": 0,
  * 			"waitTime50Percentile": 0,
  * 			"waitTime75Percentile": 0,
  * 			"waitTimeFormatted": "10 minutes",
  * 			"queueIsFull": false,
  * 			"queueAll": false,
  * 			"lastUpdated": "2020-08-03T23:46:00.000Z",
  * 			"refreshIntervalSeconds": 20,
  * 			"queueingMethod": "fifo",
  * 			"isFIFOQueue": true,
  * 			"isRandomQueue": false,
  * 			"isPassthroughQueue": false,
  * 			"isRejectQueue": false,
  * 			"isEventActive": false,
  * 			"isEventPrequeueing": false,
  * 			"timeUntilEventStart": 0,
  * 			"timeUntilEventStartFormatted": "unavailable",
  * 			"timeUntilEventEnd": 0,
  * 			"timeUntilEventEndFormatted": "unavailable",
  * 			"shuffleAtEventStart": false
  * 		}
  * 	}
  * 
  * If `json_response_enabled` is **true** and the request hits the waiting room, an example JSON response when `queueingMethod` is **random** and an event is active could be:
  * 
  * 	{
  * 		"cfWaitingRoom": {
  * 			"inWaitingRoom": true,
  * 			"waitTimeKnown": true,
  * 			"waitTime": 10,
  * 			"waitTime25Percentile": 5,
  * 			"waitTime50Percentile": 10,
  * 			"waitTime75Percentile": 15,
  * 			"waitTimeFormatted": "5 minutes to 15 minutes",
  * 			"queueIsFull": false,
  * 			"queueAll": false,
  * 			"lastUpdated": "2020-08-03T23:46:00.000Z",
  * 			"refreshIntervalSeconds": 20,
  * 			"queueingMethod": "random",
  * 			"isFIFOQueue": false,
  * 			"isRandomQueue": true,
  * 			"isPassthroughQueue": false,
  * 			"isRejectQueue": false,
  * 			"isEventActive": true,
  * 			"isEventPrequeueing": false,
  * 			"timeUntilEventStart": 0,
  * 			"timeUntilEventStartFormatted": "unavailable",
  * 			"timeUntilEventEnd": 15,
  * 			"timeUntilEventEndFormatted": "15 minutes",
  * 			"shuffleAtEventStart": true
  * 		}
  * 	}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/waiting_room#json_response_enabled WaitingRoom#json_response_enabled}
  */
  readonly jsonResponseEnabled?: boolean | cdktf.IResolvable;
  /**
  * A unique name to identify the waiting room. Only alphanumeric characters, hyphens and underscores are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/waiting_room#name WaitingRoom#name}
  */
  readonly name: string;
  /**
  * Sets the number of new users that will be let into the route every minute. This value is used as baseline for the number of users that are let in per minute. So it is possible that there is a little more or little less traffic coming to the route based on the traffic patterns at that time around the world.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/waiting_room#new_users_per_minute WaitingRoom#new_users_per_minute}
  */
  readonly newUsersPerMinute: number;
  /**
  * Sets the path within the host to enable the waiting room on. The waiting room will be enabled for all subpaths as well. If there are two waiting rooms on the same subpath, the waiting room for the most specific path will be chosen. Wildcards and query parameters are not supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/waiting_room#path WaitingRoom#path}
  */
  readonly path?: string;
  /**
  * If queue_all is `true`, all the traffic that is coming to a route will be sent to the waiting room. No new traffic can get to the route once this field is set and estimated time will become unavailable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/waiting_room#queue_all WaitingRoom#queue_all}
  */
  readonly queueAll?: boolean | cdktf.IResolvable;
  /**
  * Sets the queueing method used by the waiting room. Changing this parameter from the **default** queueing method is only available for the Waiting Room Advanced subscription. Regardless of the queueing method, if `queue_all` is enabled or an event is prequeueing, users in the waiting room will not be accepted to the origin. These users will always see a waiting room page that refreshes automatically. The valid queueing methods are:
  * 1. `fifo` **(default)**: First-In-First-Out queue where customers gain access in the order they arrived.
  * 2. `random`: Random queue where customers gain access randomly, regardless of arrival time.
  * 3. `passthrough`: Users will pass directly through the waiting room and into the origin website. As a result, any configured limits will not be respected while this is enabled. This method can be used as an alternative to disabling a waiting room (with `suspended`) so that analytics are still reported. This can be used if you wish to allow all traffic normally, but want to restrict traffic during a waiting room event, or vice versa.
  * 4. `reject`: Users will be immediately rejected from the waiting room. As a result, no users will reach the origin website while this is enabled. This can be used if you wish to reject all traffic while performing maintenance, block traffic during a specified period of time (an event), or block traffic while events are not occurring. Consider a waiting room used for vaccine distribution that only allows traffic during sign-up events, and otherwise blocks all traffic. For this case, the waiting room uses `reject`, and its events override this with `fifo`, `random`, or `passthrough`. When this queueing method is enabled and neither `queueAll` is enabled nor an event is prequeueing, the waiting room page **will not refresh automatically**.
  * Available values: "fifo", "random", "passthrough", "reject".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/waiting_room#queueing_method WaitingRoom#queueing_method}
  */
  readonly queueingMethod?: string;
  /**
  * HTTP status code returned to a user while in the queue.
  * Available values: 200, 202, 429.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/waiting_room#queueing_status_code WaitingRoom#queueing_status_code}
  */
  readonly queueingStatusCode?: number;
  /**
  * Lifetime of a cookie (in minutes) set by Cloudflare for users who get access to the route. If a user is not seen by Cloudflare again in that time period, they will be treated as a new user that visits the route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/waiting_room#session_duration WaitingRoom#session_duration}
  */
  readonly sessionDuration?: number;
  /**
  * Suspends or allows traffic going to the waiting room. If set to `true`, the traffic will not go to the waiting room.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/waiting_room#suspended WaitingRoom#suspended}
  */
  readonly suspended?: boolean | cdktf.IResolvable;
  /**
  * Sets the total number of active user sessions on the route at a point in time. A route is a combination of host and path on which a waiting room is available. This value is used as a baseline for the total number of active user sessions on the route. It is possible to have a situation where there are more or less active users sessions on the route based on the traffic patterns at that time around the world.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/waiting_room#total_active_users WaitingRoom#total_active_users}
  */
  readonly totalActiveUsers: number;
  /**
  * Which action to take when a bot is detected using Turnstile. `log` will
  * have no impact on queueing behavior, simply keeping track of how many
  * bots are detected in Waiting Room Analytics. `infinite_queue` will send
  * bots to a false queueing state, where they will never reach your
  * origin. `infinite_queue` requires Advanced Waiting Room.
  * Available values: "log", "infinite_queue".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/waiting_room#turnstile_action WaitingRoom#turnstile_action}
  */
  readonly turnstileAction?: string;
  /**
  * Which Turnstile widget type to use for detecting bot traffic. See
  * [the Turnstile documentation](https://developers.cloudflare.com/turnstile/concepts/widget/#widget-types)
  * for the definitions of these widget types. Set to `off` to disable the
  * Turnstile integration entirely. Setting this to anything other than
  * `off` or `invisible` requires Advanced Waiting Room.
  * Available values: "off", "invisible", "visible_non_interactive", "visible_managed".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/waiting_room#turnstile_mode WaitingRoom#turnstile_mode}
  */
  readonly turnstileMode?: string;
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/waiting_room#zone_id WaitingRoom#zone_id}
  */
  readonly zoneId: string;
}
export interface WaitingRoomAdditionalRoutes {
  /**
  * The hostname to which this waiting room will be applied (no wildcards). The hostname must be the primary domain, subdomain, or custom hostname (if using SSL for SaaS) of this zone. Please do not include the scheme (http:// or https://).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/waiting_room#host WaitingRoom#host}
  */
  readonly host?: string;
  /**
  * Sets the path within the host to enable the waiting room on. The waiting room will be enabled for all subpaths as well. If there are two waiting rooms on the same subpath, the waiting room for the most specific path will be chosen. Wildcards and query parameters are not supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/waiting_room#path WaitingRoom#path}
  */
  readonly path?: string;
}

export function waitingRoomAdditionalRoutesToTerraform(struct?: WaitingRoomAdditionalRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function waitingRoomAdditionalRoutesToHclTerraform(struct?: WaitingRoomAdditionalRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaitingRoomAdditionalRoutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WaitingRoomAdditionalRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaitingRoomAdditionalRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._path = value.path;
    }
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class WaitingRoomAdditionalRoutesList extends cdktf.ComplexList {
  public internalValue? : WaitingRoomAdditionalRoutes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WaitingRoomAdditionalRoutesOutputReference {
    return new WaitingRoomAdditionalRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WaitingRoomCookieAttributes {
  /**
  * Configures the SameSite attribute on the waiting room cookie. Value `auto` will be translated to `lax` or `none` depending if **Always Use HTTPS** is enabled. Note that when using value `none`, the secure attribute cannot be set to `never`.
  * Available values: "auto", "lax", "none", "strict".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/waiting_room#samesite WaitingRoom#samesite}
  */
  readonly samesite?: string;
  /**
  * Configures the Secure attribute on the waiting room cookie. Value `always` indicates that the Secure attribute will be set in the Set-Cookie header, `never` indicates that the Secure attribute will not be set, and `auto` will set the Secure attribute depending if **Always Use HTTPS** is enabled.
  * Available values: "auto", "always", "never".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/waiting_room#secure WaitingRoom#secure}
  */
  readonly secure?: string;
}

export function waitingRoomCookieAttributesToTerraform(struct?: WaitingRoomCookieAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    samesite: cdktf.stringToTerraform(struct!.samesite),
    secure: cdktf.stringToTerraform(struct!.secure),
  }
}


export function waitingRoomCookieAttributesToHclTerraform(struct?: WaitingRoomCookieAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    samesite: {
      value: cdktf.stringToHclTerraform(struct!.samesite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secure: {
      value: cdktf.stringToHclTerraform(struct!.secure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaitingRoomCookieAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WaitingRoomCookieAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._samesite !== undefined) {
      hasAnyValues = true;
      internalValueResult.samesite = this._samesite;
    }
    if (this._secure !== undefined) {
      hasAnyValues = true;
      internalValueResult.secure = this._secure;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaitingRoomCookieAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._samesite = undefined;
      this._secure = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._samesite = value.samesite;
      this._secure = value.secure;
    }
  }

  // samesite - computed: true, optional: true, required: false
  private _samesite?: string; 
  public get samesite() {
    return this.getStringAttribute('samesite');
  }
  public set samesite(value: string) {
    this._samesite = value;
  }
  public resetSamesite() {
    this._samesite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samesiteInput() {
    return this._samesite;
  }

  // secure - computed: true, optional: true, required: false
  private _secure?: string; 
  public get secure() {
    return this.getStringAttribute('secure');
  }
  public set secure(value: string) {
    this._secure = value;
  }
  public resetSecure() {
    this._secure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureInput() {
    return this._secure;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/waiting_room cloudflare_waiting_room}
*/
export class WaitingRoom extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_waiting_room";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WaitingRoom resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WaitingRoom to import
  * @param importFromId The id of the existing WaitingRoom that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/waiting_room#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WaitingRoom to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_waiting_room", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/waiting_room cloudflare_waiting_room} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WaitingRoomConfig
  */
  public constructor(scope: Construct, id: string, config: WaitingRoomConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_waiting_room',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.7.1',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalRoutes.internalValue = config.additionalRoutes;
    this._cookieAttributes.internalValue = config.cookieAttributes;
    this._cookieSuffix = config.cookieSuffix;
    this._customPageHtml = config.customPageHtml;
    this._defaultTemplateLanguage = config.defaultTemplateLanguage;
    this._description = config.description;
    this._disableSessionRenewal = config.disableSessionRenewal;
    this._enabledOriginCommands = config.enabledOriginCommands;
    this._host = config.host;
    this._jsonResponseEnabled = config.jsonResponseEnabled;
    this._name = config.name;
    this._newUsersPerMinute = config.newUsersPerMinute;
    this._path = config.path;
    this._queueAll = config.queueAll;
    this._queueingMethod = config.queueingMethod;
    this._queueingStatusCode = config.queueingStatusCode;
    this._sessionDuration = config.sessionDuration;
    this._suspended = config.suspended;
    this._totalActiveUsers = config.totalActiveUsers;
    this._turnstileAction = config.turnstileAction;
    this._turnstileMode = config.turnstileMode;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_routes - computed: true, optional: true, required: false
  private _additionalRoutes = new WaitingRoomAdditionalRoutesList(this, "additional_routes", false);
  public get additionalRoutes() {
    return this._additionalRoutes;
  }
  public putAdditionalRoutes(value: WaitingRoomAdditionalRoutes[] | cdktf.IResolvable) {
    this._additionalRoutes.internalValue = value;
  }
  public resetAdditionalRoutes() {
    this._additionalRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalRoutesInput() {
    return this._additionalRoutes.internalValue;
  }

  // cookie_attributes - computed: true, optional: true, required: false
  private _cookieAttributes = new WaitingRoomCookieAttributesOutputReference(this, "cookie_attributes");
  public get cookieAttributes() {
    return this._cookieAttributes;
  }
  public putCookieAttributes(value: WaitingRoomCookieAttributes) {
    this._cookieAttributes.internalValue = value;
  }
  public resetCookieAttributes() {
    this._cookieAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieAttributesInput() {
    return this._cookieAttributes.internalValue;
  }

  // cookie_suffix - computed: false, optional: true, required: false
  private _cookieSuffix?: string; 
  public get cookieSuffix() {
    return this.getStringAttribute('cookie_suffix');
  }
  public set cookieSuffix(value: string) {
    this._cookieSuffix = value;
  }
  public resetCookieSuffix() {
    this._cookieSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieSuffixInput() {
    return this._cookieSuffix;
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // custom_page_html - computed: true, optional: true, required: false
  private _customPageHtml?: string; 
  public get customPageHtml() {
    return this.getStringAttribute('custom_page_html');
  }
  public set customPageHtml(value: string) {
    this._customPageHtml = value;
  }
  public resetCustomPageHtml() {
    this._customPageHtml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPageHtmlInput() {
    return this._customPageHtml;
  }

  // default_template_language - computed: true, optional: true, required: false
  private _defaultTemplateLanguage?: string; 
  public get defaultTemplateLanguage() {
    return this.getStringAttribute('default_template_language');
  }
  public set defaultTemplateLanguage(value: string) {
    this._defaultTemplateLanguage = value;
  }
  public resetDefaultTemplateLanguage() {
    this._defaultTemplateLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTemplateLanguageInput() {
    return this._defaultTemplateLanguage;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disable_session_renewal - computed: true, optional: true, required: false
  private _disableSessionRenewal?: boolean | cdktf.IResolvable; 
  public get disableSessionRenewal() {
    return this.getBooleanAttribute('disable_session_renewal');
  }
  public set disableSessionRenewal(value: boolean | cdktf.IResolvable) {
    this._disableSessionRenewal = value;
  }
  public resetDisableSessionRenewal() {
    this._disableSessionRenewal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSessionRenewalInput() {
    return this._disableSessionRenewal;
  }

  // enabled_origin_commands - computed: true, optional: true, required: false
  private _enabledOriginCommands?: string[]; 
  public get enabledOriginCommands() {
    return this.getListAttribute('enabled_origin_commands');
  }
  public set enabledOriginCommands(value: string[]) {
    this._enabledOriginCommands = value;
  }
  public resetEnabledOriginCommands() {
    this._enabledOriginCommands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledOriginCommandsInput() {
    return this._enabledOriginCommands;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // json_response_enabled - computed: true, optional: true, required: false
  private _jsonResponseEnabled?: boolean | cdktf.IResolvable; 
  public get jsonResponseEnabled() {
    return this.getBooleanAttribute('json_response_enabled');
  }
  public set jsonResponseEnabled(value: boolean | cdktf.IResolvable) {
    this._jsonResponseEnabled = value;
  }
  public resetJsonResponseEnabled() {
    this._jsonResponseEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonResponseEnabledInput() {
    return this._jsonResponseEnabled;
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // new_users_per_minute - computed: false, optional: false, required: true
  private _newUsersPerMinute?: number; 
  public get newUsersPerMinute() {
    return this.getNumberAttribute('new_users_per_minute');
  }
  public set newUsersPerMinute(value: number) {
    this._newUsersPerMinute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newUsersPerMinuteInput() {
    return this._newUsersPerMinute;
  }

  // next_event_prequeue_start_time - computed: true, optional: false, required: false
  public get nextEventPrequeueStartTime() {
    return this.getStringAttribute('next_event_prequeue_start_time');
  }

  // next_event_start_time - computed: true, optional: false, required: false
  public get nextEventStartTime() {
    return this.getStringAttribute('next_event_start_time');
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // queue_all - computed: true, optional: true, required: false
  private _queueAll?: boolean | cdktf.IResolvable; 
  public get queueAll() {
    return this.getBooleanAttribute('queue_all');
  }
  public set queueAll(value: boolean | cdktf.IResolvable) {
    this._queueAll = value;
  }
  public resetQueueAll() {
    this._queueAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueAllInput() {
    return this._queueAll;
  }

  // queueing_method - computed: true, optional: true, required: false
  private _queueingMethod?: string; 
  public get queueingMethod() {
    return this.getStringAttribute('queueing_method');
  }
  public set queueingMethod(value: string) {
    this._queueingMethod = value;
  }
  public resetQueueingMethod() {
    this._queueingMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueingMethodInput() {
    return this._queueingMethod;
  }

  // queueing_status_code - computed: true, optional: true, required: false
  private _queueingStatusCode?: number; 
  public get queueingStatusCode() {
    return this.getNumberAttribute('queueing_status_code');
  }
  public set queueingStatusCode(value: number) {
    this._queueingStatusCode = value;
  }
  public resetQueueingStatusCode() {
    this._queueingStatusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueingStatusCodeInput() {
    return this._queueingStatusCode;
  }

  // session_duration - computed: true, optional: true, required: false
  private _sessionDuration?: number; 
  public get sessionDuration() {
    return this.getNumberAttribute('session_duration');
  }
  public set sessionDuration(value: number) {
    this._sessionDuration = value;
  }
  public resetSessionDuration() {
    this._sessionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionDurationInput() {
    return this._sessionDuration;
  }

  // suspended - computed: true, optional: true, required: false
  private _suspended?: boolean | cdktf.IResolvable; 
  public get suspended() {
    return this.getBooleanAttribute('suspended');
  }
  public set suspended(value: boolean | cdktf.IResolvable) {
    this._suspended = value;
  }
  public resetSuspended() {
    this._suspended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendedInput() {
    return this._suspended;
  }

  // total_active_users - computed: false, optional: false, required: true
  private _totalActiveUsers?: number; 
  public get totalActiveUsers() {
    return this.getNumberAttribute('total_active_users');
  }
  public set totalActiveUsers(value: number) {
    this._totalActiveUsers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get totalActiveUsersInput() {
    return this._totalActiveUsers;
  }

  // turnstile_action - computed: true, optional: true, required: false
  private _turnstileAction?: string; 
  public get turnstileAction() {
    return this.getStringAttribute('turnstile_action');
  }
  public set turnstileAction(value: string) {
    this._turnstileAction = value;
  }
  public resetTurnstileAction() {
    this._turnstileAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get turnstileActionInput() {
    return this._turnstileAction;
  }

  // turnstile_mode - computed: true, optional: true, required: false
  private _turnstileMode?: string; 
  public get turnstileMode() {
    return this.getStringAttribute('turnstile_mode');
  }
  public set turnstileMode(value: string) {
    this._turnstileMode = value;
  }
  public resetTurnstileMode() {
    this._turnstileMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get turnstileModeInput() {
    return this._turnstileMode;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_routes: cdktf.listMapper(waitingRoomAdditionalRoutesToTerraform, false)(this._additionalRoutes.internalValue),
      cookie_attributes: waitingRoomCookieAttributesToTerraform(this._cookieAttributes.internalValue),
      cookie_suffix: cdktf.stringToTerraform(this._cookieSuffix),
      custom_page_html: cdktf.stringToTerraform(this._customPageHtml),
      default_template_language: cdktf.stringToTerraform(this._defaultTemplateLanguage),
      description: cdktf.stringToTerraform(this._description),
      disable_session_renewal: cdktf.booleanToTerraform(this._disableSessionRenewal),
      enabled_origin_commands: cdktf.listMapper(cdktf.stringToTerraform, false)(this._enabledOriginCommands),
      host: cdktf.stringToTerraform(this._host),
      json_response_enabled: cdktf.booleanToTerraform(this._jsonResponseEnabled),
      name: cdktf.stringToTerraform(this._name),
      new_users_per_minute: cdktf.numberToTerraform(this._newUsersPerMinute),
      path: cdktf.stringToTerraform(this._path),
      queue_all: cdktf.booleanToTerraform(this._queueAll),
      queueing_method: cdktf.stringToTerraform(this._queueingMethod),
      queueing_status_code: cdktf.numberToTerraform(this._queueingStatusCode),
      session_duration: cdktf.numberToTerraform(this._sessionDuration),
      suspended: cdktf.booleanToTerraform(this._suspended),
      total_active_users: cdktf.numberToTerraform(this._totalActiveUsers),
      turnstile_action: cdktf.stringToTerraform(this._turnstileAction),
      turnstile_mode: cdktf.stringToTerraform(this._turnstileMode),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_routes: {
        value: cdktf.listMapperHcl(waitingRoomAdditionalRoutesToHclTerraform, false)(this._additionalRoutes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WaitingRoomAdditionalRoutesList",
      },
      cookie_attributes: {
        value: waitingRoomCookieAttributesToHclTerraform(this._cookieAttributes.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WaitingRoomCookieAttributes",
      },
      cookie_suffix: {
        value: cdktf.stringToHclTerraform(this._cookieSuffix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_page_html: {
        value: cdktf.stringToHclTerraform(this._customPageHtml),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_template_language: {
        value: cdktf.stringToHclTerraform(this._defaultTemplateLanguage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_session_renewal: {
        value: cdktf.booleanToHclTerraform(this._disableSessionRenewal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled_origin_commands: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._enabledOriginCommands),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      json_response_enabled: {
        value: cdktf.booleanToHclTerraform(this._jsonResponseEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      new_users_per_minute: {
        value: cdktf.numberToHclTerraform(this._newUsersPerMinute),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      queue_all: {
        value: cdktf.booleanToHclTerraform(this._queueAll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      queueing_method: {
        value: cdktf.stringToHclTerraform(this._queueingMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      queueing_status_code: {
        value: cdktf.numberToHclTerraform(this._queueingStatusCode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      session_duration: {
        value: cdktf.numberToHclTerraform(this._sessionDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      suspended: {
        value: cdktf.booleanToHclTerraform(this._suspended),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      total_active_users: {
        value: cdktf.numberToHclTerraform(this._totalActiveUsers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      turnstile_action: {
        value: cdktf.stringToHclTerraform(this._turnstileAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      turnstile_mode: {
        value: cdktf.stringToHclTerraform(this._turnstileMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
