# `waitingRoom` Submodule <a name="`waitingRoom` Submodule" id="@cdktf/provider-cloudflare.waitingRoom"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WaitingRoom <a name="WaitingRoom" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room cloudflare_waiting_room}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import waiting_room

waitingRoom.WaitingRoom(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  host: str,
  name: str,
  new_users_per_minute: typing.Union[int, float],
  total_active_users: typing.Union[int, float],
  zone_id: str,
  additional_routes: typing.Union[IResolvable, typing.List[WaitingRoomAdditionalRoutes]] = None,
  cookie_attributes: WaitingRoomCookieAttributes = None,
  cookie_suffix: str = None,
  custom_page_html: str = None,
  default_template_language: str = None,
  description: str = None,
  disable_session_renewal: typing.Union[bool, IResolvable] = None,
  enabled_origin_commands: typing.List[str] = None,
  json_response_enabled: typing.Union[bool, IResolvable] = None,
  path: str = None,
  queue_all: typing.Union[bool, IResolvable] = None,
  queueing_method: str = None,
  queueing_status_code: typing.Union[int, float] = None,
  session_duration: typing.Union[int, float] = None,
  suspended: typing.Union[bool, IResolvable] = None,
  turnstile_action: str = None,
  turnstile_mode: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.host">host</a></code> | <code>str</code> | The host name to which the waiting room will be applied (no wildcards). |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.name">name</a></code> | <code>str</code> | A unique name to identify the waiting room. Only alphanumeric characters, hyphens and underscores are allowed. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.newUsersPerMinute">new_users_per_minute</a></code> | <code>typing.Union[int, float]</code> | Sets the number of new users that will be let into the route every minute. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.totalActiveUsers">total_active_users</a></code> | <code>typing.Union[int, float]</code> | Sets the total number of active user sessions on the route at a point in time. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.additionalRoutes">additional_routes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutes">WaitingRoomAdditionalRoutes</a>]]</code> | Only available for the Waiting Room Advanced subscription. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.cookieAttributes">cookie_attributes</a></code> | <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributes">WaitingRoomCookieAttributes</a></code> | Configures cookie attributes for the waiting room cookie. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.cookieSuffix">cookie_suffix</a></code> | <code>str</code> | Appends a '_' + a custom suffix to the end of Cloudflare Waiting Room's cookie name(__cf_waitingroom). |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.customPageHtml">custom_page_html</a></code> | <code>str</code> | Only available for the Waiting Room Advanced subscription. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.defaultTemplateLanguage">default_template_language</a></code> | <code>str</code> | The language of the default page template. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.description">description</a></code> | <code>str</code> | A note that you can use to add more details about the waiting room. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.disableSessionRenewal">disable_session_renewal</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Only available for the Waiting Room Advanced subscription. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.enabledOriginCommands">enabled_origin_commands</a></code> | <code>typing.List[str]</code> | A list of enabled origin commands. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.jsonResponseEnabled">json_response_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Only available for the Waiting Room Advanced subscription. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.path">path</a></code> | <code>str</code> | Sets the path within the host to enable the waiting room on. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.queueAll">queue_all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If queue_all is `true`, all the traffic that is coming to a route will be sent to the waiting room. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.queueingMethod">queueing_method</a></code> | <code>str</code> | Sets the queueing method used by the waiting room. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.queueingStatusCode">queueing_status_code</a></code> | <code>typing.Union[int, float]</code> | HTTP status code returned to a user while in the queue. Available values: 200, 202, 429. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.sessionDuration">session_duration</a></code> | <code>typing.Union[int, float]</code> | Lifetime of a cookie (in minutes) set by Cloudflare for users who get access to the route. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.suspended">suspended</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Suspends or allows traffic going to the waiting room. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.turnstileAction">turnstile_action</a></code> | <code>str</code> | Which action to take when a bot is detected using Turnstile. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.turnstileMode">turnstile_mode</a></code> | <code>str</code> | Which Turnstile widget type to use for detecting bot traffic. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.host"></a>

- *Type:* str

The host name to which the waiting room will be applied (no wildcards).

Please do not include the scheme (http:// or https://). The host and path combination must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room#host WaitingRoom#host}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.name"></a>

- *Type:* str

A unique name to identify the waiting room. Only alphanumeric characters, hyphens and underscores are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room#name WaitingRoom#name}

---

##### `new_users_per_minute`<sup>Required</sup> <a name="new_users_per_minute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.newUsersPerMinute"></a>

- *Type:* typing.Union[int, float]

Sets the number of new users that will be let into the route every minute.

This value is used as baseline for the number of users that are let in per minute. So it is possible that there is a little more or little less traffic coming to the route based on the traffic patterns at that time around the world.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room#new_users_per_minute WaitingRoom#new_users_per_minute}

---

##### `total_active_users`<sup>Required</sup> <a name="total_active_users" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.totalActiveUsers"></a>

- *Type:* typing.Union[int, float]

Sets the total number of active user sessions on the route at a point in time.

A route is a combination of host and path on which a waiting room is available. This value is used as a baseline for the total number of active user sessions on the route. It is possible to have a situation where there are more or less active users sessions on the route based on the traffic patterns at that time around the world.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room#total_active_users WaitingRoom#total_active_users}

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.zoneId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room#zone_id WaitingRoom#zone_id}

---

##### `additional_routes`<sup>Optional</sup> <a name="additional_routes" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.additionalRoutes"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutes">WaitingRoomAdditionalRoutes</a>]]

Only available for the Waiting Room Advanced subscription.

Additional hostname and path combinations to which this waiting room will be applied. There is an implied wildcard at the end of the path. The hostname and path combination must be unique to this and all other waiting rooms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room#additional_routes WaitingRoom#additional_routes}

---

##### `cookie_attributes`<sup>Optional</sup> <a name="cookie_attributes" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.cookieAttributes"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributes">WaitingRoomCookieAttributes</a>

Configures cookie attributes for the waiting room cookie.

This encrypted cookie stores a user's status in the waiting room, such as queue position.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room#cookie_attributes WaitingRoom#cookie_attributes}

---

##### `cookie_suffix`<sup>Optional</sup> <a name="cookie_suffix" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.cookieSuffix"></a>

- *Type:* str

Appends a '_' + a custom suffix to the end of Cloudflare Waiting Room's cookie name(__cf_waitingroom).

If `cookie_suffix` is "abcd", the cookie name will be `__cf_waitingroom_abcd`. This field is required if using `additional_routes`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room#cookie_suffix WaitingRoom#cookie_suffix}

---

##### `custom_page_html`<sup>Optional</sup> <a name="custom_page_html" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.customPageHtml"></a>

- *Type:* str

Only available for the Waiting Room Advanced subscription.

This is a template html file that will be rendered at the edge. If no custom_page_html is provided, the default waiting room will be used. The template is based on mustache ( https://mustache.github.io/ ). There are several variables that are evaluated by the Cloudflare edge:

1. {{`waitTimeKnown`}} Acts like a boolean value that indicates the behavior to take when wait time is not available, for instance when queue_all is **true**.
2. {{`waitTimeFormatted`}} Estimated wait time for the user. For example, five minutes. Alternatively, you can use:
3. {{`waitTime`}} Number of minutes of estimated wait for a user.
4. {{`waitTimeHours`}} Number of hours of estimated wait for a user (`Math.floor(waitTime/60)`).
5. {{`waitTimeHourMinutes`}} Number of minutes above the `waitTimeHours` value (`waitTime%60`).
6. {{`queueIsFull`}} Changes to **true** when no more people can be added to the queue.

To view the full list of variables, look at the `cfWaitingRoom` object described under the `json_response_enabled` property in other Waiting Room API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room#custom_page_html WaitingRoom#custom_page_html}

---

##### `default_template_language`<sup>Optional</sup> <a name="default_template_language" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.defaultTemplateLanguage"></a>

- *Type:* str

The language of the default page template.

If no default_template_language is provided, then `en-US` (English) will be used.
Available values: "en-US", "es-ES", "de-DE", "fr-FR", "it-IT", "ja-JP", "ko-KR", "pt-BR", "zh-CN", "zh-TW", "nl-NL", "pl-PL", "id-ID", "tr-TR", "ar-EG", "ru-RU", "fa-IR", "bg-BG", "hr-HR", "cs-CZ", "da-DK", "fi-FI", "lt-LT", "ms-MY", "nb-NO", "ro-RO", "el-GR", "he-IL", "hi-IN", "hu-HU", "sr-BA", "sk-SK", "sl-SI", "sv-SE", "tl-PH", "th-TH", "uk-UA", "vi-VN".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room#default_template_language WaitingRoom#default_template_language}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.description"></a>

- *Type:* str

A note that you can use to add more details about the waiting room.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room#description WaitingRoom#description}

---

##### `disable_session_renewal`<sup>Optional</sup> <a name="disable_session_renewal" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.disableSessionRenewal"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Only available for the Waiting Room Advanced subscription.

Disables automatic renewal of session cookies. If `true`, an accepted user will have session_duration minutes to browse the site. After that, they will have to go through the waiting room again. If `false`, a user's session cookie will be automatically renewed on every request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room#disable_session_renewal WaitingRoom#disable_session_renewal}

---

##### `enabled_origin_commands`<sup>Optional</sup> <a name="enabled_origin_commands" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.enabledOriginCommands"></a>

- *Type:* typing.List[str]

A list of enabled origin commands.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room#enabled_origin_commands WaitingRoom#enabled_origin_commands}

---

##### `json_response_enabled`<sup>Optional</sup> <a name="json_response_enabled" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.jsonResponseEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Only available for the Waiting Room Advanced subscription.

If `true`, requests to the waiting room with the header `Accept: application/json` will receive a JSON response object with information on the user's status in the waiting room as opposed to the configured static HTML page. This JSON response object has one property `cfWaitingRoom` which is an object containing the following fields:

1. `inWaitingRoom`: Boolean indicating if the user is in the waiting room (always **true**).
2. `waitTimeKnown`: Boolean indicating if the current estimated wait times are accurate. If **false**, they are not available.
3. `waitTime`: Valid only when `waitTimeKnown` is **true**. Integer indicating the current estimated time in minutes the user will wait in the waiting room. When `queueingMethod` is **random**, this is set to `waitTime50Percentile`.
4. `waitTime25Percentile`: Valid only when `queueingMethod` is **random** and `waitTimeKnown` is **true**. Integer indicating the current estimated maximum wait time for the 25% of users that gain entry the fastest (25th percentile).
5. `waitTime50Percentile`: Valid only when `queueingMethod` is **random** and `waitTimeKnown` is **true**. Integer indicating the current estimated maximum wait time for the 50% of users that gain entry the fastest (50th percentile). In other words, half of the queued users are expected to let into the origin website before `waitTime50Percentile` and half are expected to be let in after it.
6. `waitTime75Percentile`: Valid only when `queueingMethod` is **random** and `waitTimeKnown` is **true**. Integer indicating the current estimated maximum wait time for the 75% of users that gain entry the fastest (75th percentile).
7. `waitTimeFormatted`: String displaying the `waitTime` formatted in English for users. If `waitTimeKnown` is **false**, `waitTimeFormatted` will display **unavailable**.
8. `queueIsFull`: Boolean indicating if the waiting room's queue is currently full and not accepting new users at the moment.
9. `queueAll`: Boolean indicating if all users will be queued in the waiting room and no one will be let into the origin website.
10. `lastUpdated`: String displaying the timestamp as an ISO 8601 string of the user's last attempt to leave the waiting room and be let into the origin website. The user is able to make another attempt after `refreshIntervalSeconds` past this time. If the user makes a request too soon, it will be ignored and `lastUpdated` will not change.
11. `refreshIntervalSeconds`: Integer indicating the number of seconds after `lastUpdated` until the user is able to make another attempt to leave the waiting room and be let into the origin website. When the `queueingMethod` is `reject`, there is no specified refresh time —_it will always be **zero**.
12. `queueingMethod`: The queueing method currently used by the waiting room. It is either **fifo**, **random**, **passthrough**, or **reject**.
13. `isFIFOQueue`: Boolean indicating if the waiting room uses a FIFO (First-In-First-Out) queue.
14. `isRandomQueue`: Boolean indicating if the waiting room uses a Random queue where users gain access randomly.
15. `isPassthroughQueue`: Boolean indicating if the waiting room uses a passthrough queue. Keep in mind that when passthrough is enabled, this JSON response will only exist when `queueAll` is **true** or `isEventPrequeueing` is **true** because in all other cases requests will go directly to the origin.
16. `isRejectQueue`: Boolean indicating if the waiting room uses a reject queue.
17. `isEventActive`: Boolean indicating if an event is currently occurring. Events are able to change a waiting room's behavior during a specified period of time. For additional information, look at the event properties `prequeue_start_time`, `event_start_time`, and `event_end_time` in the documentation for creating waiting room events. Events are considered active between these start and end times, as well as during the prequeueing period if it exists.
18. `isEventPrequeueing`: Valid only when `isEventActive` is **true**. Boolean indicating if an event is currently prequeueing users before it starts.
19. `timeUntilEventStart`: Valid only when `isEventPrequeueing` is **true**. Integer indicating the number of minutes until the event starts.
20. `timeUntilEventStartFormatted`: String displaying the `timeUntilEventStart` formatted in English for users. If `isEventPrequeueing` is **false**, `timeUntilEventStartFormatted` will display **unavailable**.
21. `timeUntilEventEnd`: Valid only when `isEventActive` is **true**. Integer indicating the number of minutes until the event ends.
22. `timeUntilEventEndFormatted`: String displaying the `timeUntilEventEnd` formatted in English for users. If `isEventActive` is **false**, `timeUntilEventEndFormatted` will display **unavailable**.
23. `shuffleAtEventStart`: Valid only when `isEventActive` is **true**. Boolean indicating if the users in the prequeue are shuffled randomly when the event starts.
24. `turnstile`: Empty when turnstile isn't enabled. String displaying an html tag to display the Turnstile widget. Please add the `{{{turnstile}}}` tag to the `custom_html` template to ensure the Turnstile widget appears.
25. `infiniteQueue`: Boolean indicating whether the response is for a user in the infinite queue.

An example cURL to a waiting room could be:

```
curl -X GET "https://example.com/waitingroom" \
	-H "Accept: application/json"
```

If `json_response_enabled` is **true** and the request hits the waiting room, an example JSON response when `queueingMethod` is **fifo** and no event is active could be:

```
{
	"cfWaitingRoom": {
		"inWaitingRoom": true,
		"waitTimeKnown": true,
		"waitTime": 10,
		"waitTime25Percentile": 0,
		"waitTime50Percentile": 0,
		"waitTime75Percentile": 0,
		"waitTimeFormatted": "10 minutes",
		"queueIsFull": false,
		"queueAll": false,
		"lastUpdated": "2020-08-03T23:46:00.000Z",
		"refreshIntervalSeconds": 20,
		"queueingMethod": "fifo",
		"isFIFOQueue": true,
		"isRandomQueue": false,
		"isPassthroughQueue": false,
		"isRejectQueue": false,
		"isEventActive": false,
		"isEventPrequeueing": false,
		"timeUntilEventStart": 0,
		"timeUntilEventStartFormatted": "unavailable",
		"timeUntilEventEnd": 0,
		"timeUntilEventEndFormatted": "unavailable",
		"shuffleAtEventStart": false
	}
}
```

If `json_response_enabled` is **true** and the request hits the waiting room, an example JSON response when `queueingMethod` is **random** and an event is active could be:

```
{
	"cfWaitingRoom": {
		"inWaitingRoom": true,
		"waitTimeKnown": true,
		"waitTime": 10,
		"waitTime25Percentile": 5,
		"waitTime50Percentile": 10,
		"waitTime75Percentile": 15,
		"waitTimeFormatted": "5 minutes to 15 minutes",
		"queueIsFull": false,
		"queueAll": false,
		"lastUpdated": "2020-08-03T23:46:00.000Z",
		"refreshIntervalSeconds": 20,
		"queueingMethod": "random",
		"isFIFOQueue": false,
		"isRandomQueue": true,
		"isPassthroughQueue": false,
		"isRejectQueue": false,
		"isEventActive": true,
		"isEventPrequeueing": false,
		"timeUntilEventStart": 0,
		"timeUntilEventStartFormatted": "unavailable",
		"timeUntilEventEnd": 15,
		"timeUntilEventEndFormatted": "15 minutes",
		"shuffleAtEventStart": true
	}
}
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room#json_response_enabled WaitingRoom#json_response_enabled}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.path"></a>

- *Type:* str

Sets the path within the host to enable the waiting room on.

The waiting room will be enabled for all subpaths as well. If there are two waiting rooms on the same subpath, the waiting room for the most specific path will be chosen. Wildcards and query parameters are not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room#path WaitingRoom#path}

---

##### `queue_all`<sup>Optional</sup> <a name="queue_all" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.queueAll"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If queue_all is `true`, all the traffic that is coming to a route will be sent to the waiting room.

No new traffic can get to the route once this field is set and estimated time will become unavailable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room#queue_all WaitingRoom#queue_all}

---

##### `queueing_method`<sup>Optional</sup> <a name="queueing_method" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.queueingMethod"></a>

- *Type:* str

Sets the queueing method used by the waiting room.

Changing this parameter from the **default** queueing method is only available for the Waiting Room Advanced subscription. Regardless of the queueing method, if `queue_all` is enabled or an event is prequeueing, users in the waiting room will not be accepted to the origin. These users will always see a waiting room page that refreshes automatically. The valid queueing methods are:

1. `fifo` **(default)**: First-In-First-Out queue where customers gain access in the order they arrived.
2. `random`: Random queue where customers gain access randomly, regardless of arrival time.
3. `passthrough`: Users will pass directly through the waiting room and into the origin website. As a result, any configured limits will not be respected while this is enabled. This method can be used as an alternative to disabling a waiting room (with `suspended`) so that analytics are still reported. This can be used if you wish to allow all traffic normally, but want to restrict traffic during a waiting room event, or vice versa.
4. `reject`: Users will be immediately rejected from the waiting room. As a result, no users will reach the origin website while this is enabled. This can be used if you wish to reject all traffic while performing maintenance, block traffic during a specified period of time (an event), or block traffic while events are not occurring. Consider a waiting room used for vaccine distribution that only allows traffic during sign-up events, and otherwise blocks all traffic. For this case, the waiting room uses `reject`, and its events override this with `fifo`, `random`, or `passthrough`. When this queueing method is enabled and neither `queueAll` is enabled nor an event is prequeueing, the waiting room page **will not refresh automatically**.
   Available values: "fifo", "random", "passthrough", "reject".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room#queueing_method WaitingRoom#queueing_method}

---

##### `queueing_status_code`<sup>Optional</sup> <a name="queueing_status_code" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.queueingStatusCode"></a>

- *Type:* typing.Union[int, float]

HTTP status code returned to a user while in the queue. Available values: 200, 202, 429.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room#queueing_status_code WaitingRoom#queueing_status_code}

---

##### `session_duration`<sup>Optional</sup> <a name="session_duration" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.sessionDuration"></a>

- *Type:* typing.Union[int, float]

Lifetime of a cookie (in minutes) set by Cloudflare for users who get access to the route.

If a user is not seen by Cloudflare again in that time period, they will be treated as a new user that visits the route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room#session_duration WaitingRoom#session_duration}

---

##### `suspended`<sup>Optional</sup> <a name="suspended" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.suspended"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Suspends or allows traffic going to the waiting room.

If set to `true`, the traffic will not go to the waiting room.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room#suspended WaitingRoom#suspended}

---

##### `turnstile_action`<sup>Optional</sup> <a name="turnstile_action" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.turnstileAction"></a>

- *Type:* str

Which action to take when a bot is detected using Turnstile.

`log` will
have no impact on queueing behavior, simply keeping track of how many
bots are detected in Waiting Room Analytics. `infinite_queue` will send
bots to a false queueing state, where they will never reach your
origin. `infinite_queue` requires Advanced Waiting Room.
Available values: "log", "infinite_queue".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room#turnstile_action WaitingRoom#turnstile_action}

---

##### `turnstile_mode`<sup>Optional</sup> <a name="turnstile_mode" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.turnstileMode"></a>

- *Type:* str

Which Turnstile widget type to use for detecting bot traffic.

See
[the Turnstile documentation](https://developers.cloudflare.com/turnstile/concepts/widget/#widget-types)
for the definitions of these widget types. Set to `off` to disable the
Turnstile integration entirely. Setting this to anything other than
`off` or `invisible` requires Advanced Waiting Room.
Available values: "off", "invisible", "visible_non_interactive", "visible_managed".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room#turnstile_mode WaitingRoom#turnstile_mode}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.putAdditionalRoutes">put_additional_routes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.putCookieAttributes">put_cookie_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetAdditionalRoutes">reset_additional_routes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetCookieAttributes">reset_cookie_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetCookieSuffix">reset_cookie_suffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetCustomPageHtml">reset_custom_page_html</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetDefaultTemplateLanguage">reset_default_template_language</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetDisableSessionRenewal">reset_disable_session_renewal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetEnabledOriginCommands">reset_enabled_origin_commands</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetJsonResponseEnabled">reset_json_response_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetQueueAll">reset_queue_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetQueueingMethod">reset_queueing_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetQueueingStatusCode">reset_queueing_status_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetSessionDuration">reset_session_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetSuspended">reset_suspended</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetTurnstileAction">reset_turnstile_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetTurnstileMode">reset_turnstile_mode</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_additional_routes` <a name="put_additional_routes" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.putAdditionalRoutes"></a>

```python
def put_additional_routes(
  value: typing.Union[IResolvable, typing.List[WaitingRoomAdditionalRoutes]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.putAdditionalRoutes.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutes">WaitingRoomAdditionalRoutes</a>]]

---

##### `put_cookie_attributes` <a name="put_cookie_attributes" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.putCookieAttributes"></a>

```python
def put_cookie_attributes(
  samesite: str = None,
  secure: str = None
) -> None
```

###### `samesite`<sup>Optional</sup> <a name="samesite" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.putCookieAttributes.parameter.samesite"></a>

- *Type:* str

Configures the SameSite attribute on the waiting room cookie.

Value `auto` will be translated to `lax` or `none` depending if **Always Use HTTPS** is enabled. Note that when using value `none`, the secure attribute cannot be set to `never`.
Available values: "auto", "lax", "none", "strict".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room#samesite WaitingRoom#samesite}

---

###### `secure`<sup>Optional</sup> <a name="secure" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.putCookieAttributes.parameter.secure"></a>

- *Type:* str

Configures the Secure attribute on the waiting room cookie.

Value `always` indicates that the Secure attribute will be set in the Set-Cookie header, `never` indicates that the Secure attribute will not be set, and `auto` will set the Secure attribute depending if **Always Use HTTPS** is enabled.
Available values: "auto", "always", "never".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room#secure WaitingRoom#secure}

---

##### `reset_additional_routes` <a name="reset_additional_routes" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetAdditionalRoutes"></a>

```python
def reset_additional_routes() -> None
```

##### `reset_cookie_attributes` <a name="reset_cookie_attributes" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetCookieAttributes"></a>

```python
def reset_cookie_attributes() -> None
```

##### `reset_cookie_suffix` <a name="reset_cookie_suffix" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetCookieSuffix"></a>

```python
def reset_cookie_suffix() -> None
```

##### `reset_custom_page_html` <a name="reset_custom_page_html" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetCustomPageHtml"></a>

```python
def reset_custom_page_html() -> None
```

##### `reset_default_template_language` <a name="reset_default_template_language" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetDefaultTemplateLanguage"></a>

```python
def reset_default_template_language() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disable_session_renewal` <a name="reset_disable_session_renewal" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetDisableSessionRenewal"></a>

```python
def reset_disable_session_renewal() -> None
```

##### `reset_enabled_origin_commands` <a name="reset_enabled_origin_commands" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetEnabledOriginCommands"></a>

```python
def reset_enabled_origin_commands() -> None
```

##### `reset_json_response_enabled` <a name="reset_json_response_enabled" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetJsonResponseEnabled"></a>

```python
def reset_json_response_enabled() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_queue_all` <a name="reset_queue_all" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetQueueAll"></a>

```python
def reset_queue_all() -> None
```

##### `reset_queueing_method` <a name="reset_queueing_method" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetQueueingMethod"></a>

```python
def reset_queueing_method() -> None
```

##### `reset_queueing_status_code` <a name="reset_queueing_status_code" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetQueueingStatusCode"></a>

```python
def reset_queueing_status_code() -> None
```

##### `reset_session_duration` <a name="reset_session_duration" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetSessionDuration"></a>

```python
def reset_session_duration() -> None
```

##### `reset_suspended` <a name="reset_suspended" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetSuspended"></a>

```python
def reset_suspended() -> None
```

##### `reset_turnstile_action` <a name="reset_turnstile_action" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetTurnstileAction"></a>

```python
def reset_turnstile_action() -> None
```

##### `reset_turnstile_mode` <a name="reset_turnstile_mode" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetTurnstileMode"></a>

```python
def reset_turnstile_mode() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a WaitingRoom resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import waiting_room

waitingRoom.WaitingRoom.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import waiting_room

waitingRoom.WaitingRoom.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import waiting_room

waitingRoom.WaitingRoom.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import waiting_room

waitingRoom.WaitingRoom.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a WaitingRoom resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WaitingRoom to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WaitingRoom that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WaitingRoom to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.additionalRoutes">additional_routes</a></code> | <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList">WaitingRoomAdditionalRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.cookieAttributes">cookie_attributes</a></code> | <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference">WaitingRoomCookieAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.modifiedOn">modified_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.nextEventPrequeueStartTime">next_event_prequeue_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.nextEventStartTime">next_event_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.additionalRoutesInput">additional_routes_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutes">WaitingRoomAdditionalRoutes</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.cookieAttributesInput">cookie_attributes_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributes">WaitingRoomCookieAttributes</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.cookieSuffixInput">cookie_suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.customPageHtmlInput">custom_page_html_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.defaultTemplateLanguageInput">default_template_language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.disableSessionRenewalInput">disable_session_renewal_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.enabledOriginCommandsInput">enabled_origin_commands_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.jsonResponseEnabledInput">json_response_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.newUsersPerMinuteInput">new_users_per_minute_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.queueAllInput">queue_all_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.queueingMethodInput">queueing_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.queueingStatusCodeInput">queueing_status_code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.sessionDurationInput">session_duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.suspendedInput">suspended_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.totalActiveUsersInput">total_active_users_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.turnstileActionInput">turnstile_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.turnstileModeInput">turnstile_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.cookieSuffix">cookie_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.customPageHtml">custom_page_html</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.defaultTemplateLanguage">default_template_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.disableSessionRenewal">disable_session_renewal</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.enabledOriginCommands">enabled_origin_commands</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.jsonResponseEnabled">json_response_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.newUsersPerMinute">new_users_per_minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.queueAll">queue_all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.queueingMethod">queueing_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.queueingStatusCode">queueing_status_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.sessionDuration">session_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.suspended">suspended</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.totalActiveUsers">total_active_users</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.turnstileAction">turnstile_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.turnstileMode">turnstile_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `additional_routes`<sup>Required</sup> <a name="additional_routes" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.additionalRoutes"></a>

```python
additional_routes: WaitingRoomAdditionalRoutesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList">WaitingRoomAdditionalRoutesList</a>

---

##### `cookie_attributes`<sup>Required</sup> <a name="cookie_attributes" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.cookieAttributes"></a>

```python
cookie_attributes: WaitingRoomCookieAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference">WaitingRoomCookieAttributesOutputReference</a>

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `modified_on`<sup>Required</sup> <a name="modified_on" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.modifiedOn"></a>

```python
modified_on: str
```

- *Type:* str

---

##### `next_event_prequeue_start_time`<sup>Required</sup> <a name="next_event_prequeue_start_time" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.nextEventPrequeueStartTime"></a>

```python
next_event_prequeue_start_time: str
```

- *Type:* str

---

##### `next_event_start_time`<sup>Required</sup> <a name="next_event_start_time" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.nextEventStartTime"></a>

```python
next_event_start_time: str
```

- *Type:* str

---

##### `additional_routes_input`<sup>Optional</sup> <a name="additional_routes_input" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.additionalRoutesInput"></a>

```python
additional_routes_input: typing.Union[IResolvable, typing.List[WaitingRoomAdditionalRoutes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutes">WaitingRoomAdditionalRoutes</a>]]

---

##### `cookie_attributes_input`<sup>Optional</sup> <a name="cookie_attributes_input" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.cookieAttributesInput"></a>

```python
cookie_attributes_input: typing.Union[IResolvable, WaitingRoomCookieAttributes]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributes">WaitingRoomCookieAttributes</a>]

---

##### `cookie_suffix_input`<sup>Optional</sup> <a name="cookie_suffix_input" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.cookieSuffixInput"></a>

```python
cookie_suffix_input: str
```

- *Type:* str

---

##### `custom_page_html_input`<sup>Optional</sup> <a name="custom_page_html_input" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.customPageHtmlInput"></a>

```python
custom_page_html_input: str
```

- *Type:* str

---

##### `default_template_language_input`<sup>Optional</sup> <a name="default_template_language_input" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.defaultTemplateLanguageInput"></a>

```python
default_template_language_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disable_session_renewal_input`<sup>Optional</sup> <a name="disable_session_renewal_input" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.disableSessionRenewalInput"></a>

```python
disable_session_renewal_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled_origin_commands_input`<sup>Optional</sup> <a name="enabled_origin_commands_input" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.enabledOriginCommandsInput"></a>

```python
enabled_origin_commands_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `json_response_enabled_input`<sup>Optional</sup> <a name="json_response_enabled_input" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.jsonResponseEnabledInput"></a>

```python
json_response_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `new_users_per_minute_input`<sup>Optional</sup> <a name="new_users_per_minute_input" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.newUsersPerMinuteInput"></a>

```python
new_users_per_minute_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `queue_all_input`<sup>Optional</sup> <a name="queue_all_input" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.queueAllInput"></a>

```python
queue_all_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `queueing_method_input`<sup>Optional</sup> <a name="queueing_method_input" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.queueingMethodInput"></a>

```python
queueing_method_input: str
```

- *Type:* str

---

##### `queueing_status_code_input`<sup>Optional</sup> <a name="queueing_status_code_input" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.queueingStatusCodeInput"></a>

```python
queueing_status_code_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `session_duration_input`<sup>Optional</sup> <a name="session_duration_input" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.sessionDurationInput"></a>

```python
session_duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `suspended_input`<sup>Optional</sup> <a name="suspended_input" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.suspendedInput"></a>

```python
suspended_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `total_active_users_input`<sup>Optional</sup> <a name="total_active_users_input" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.totalActiveUsersInput"></a>

```python
total_active_users_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `turnstile_action_input`<sup>Optional</sup> <a name="turnstile_action_input" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.turnstileActionInput"></a>

```python
turnstile_action_input: str
```

- *Type:* str

---

##### `turnstile_mode_input`<sup>Optional</sup> <a name="turnstile_mode_input" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.turnstileModeInput"></a>

```python
turnstile_mode_input: str
```

- *Type:* str

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `cookie_suffix`<sup>Required</sup> <a name="cookie_suffix" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.cookieSuffix"></a>

```python
cookie_suffix: str
```

- *Type:* str

---

##### `custom_page_html`<sup>Required</sup> <a name="custom_page_html" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.customPageHtml"></a>

```python
custom_page_html: str
```

- *Type:* str

---

##### `default_template_language`<sup>Required</sup> <a name="default_template_language" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.defaultTemplateLanguage"></a>

```python
default_template_language: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disable_session_renewal`<sup>Required</sup> <a name="disable_session_renewal" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.disableSessionRenewal"></a>

```python
disable_session_renewal: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled_origin_commands`<sup>Required</sup> <a name="enabled_origin_commands" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.enabledOriginCommands"></a>

```python
enabled_origin_commands: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `json_response_enabled`<sup>Required</sup> <a name="json_response_enabled" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.jsonResponseEnabled"></a>

```python
json_response_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `new_users_per_minute`<sup>Required</sup> <a name="new_users_per_minute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.newUsersPerMinute"></a>

```python
new_users_per_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `queue_all`<sup>Required</sup> <a name="queue_all" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.queueAll"></a>

```python
queue_all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `queueing_method`<sup>Required</sup> <a name="queueing_method" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.queueingMethod"></a>

```python
queueing_method: str
```

- *Type:* str

---

##### `queueing_status_code`<sup>Required</sup> <a name="queueing_status_code" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.queueingStatusCode"></a>

```python
queueing_status_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `session_duration`<sup>Required</sup> <a name="session_duration" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.sessionDuration"></a>

```python
session_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `suspended`<sup>Required</sup> <a name="suspended" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.suspended"></a>

```python
suspended: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `total_active_users`<sup>Required</sup> <a name="total_active_users" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.totalActiveUsers"></a>

```python
total_active_users: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `turnstile_action`<sup>Required</sup> <a name="turnstile_action" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.turnstileAction"></a>

```python
turnstile_action: str
```

- *Type:* str

---

##### `turnstile_mode`<sup>Required</sup> <a name="turnstile_mode" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.turnstileMode"></a>

```python
turnstile_mode: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WaitingRoomAdditionalRoutes <a name="WaitingRoomAdditionalRoutes" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutes.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import waiting_room

waitingRoom.WaitingRoomAdditionalRoutes(
  host: str = None,
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutes.property.host">host</a></code> | <code>str</code> | The hostname to which this waiting room will be applied (no wildcards). |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutes.property.path">path</a></code> | <code>str</code> | Sets the path within the host to enable the waiting room on. |

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutes.property.host"></a>

```python
host: str
```

- *Type:* str

The hostname to which this waiting room will be applied (no wildcards).

The hostname must be the primary domain, subdomain, or custom hostname (if using SSL for SaaS) of this zone. Please do not include the scheme (http:// or https://).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room#host WaitingRoom#host}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutes.property.path"></a>

```python
path: str
```

- *Type:* str

Sets the path within the host to enable the waiting room on.

The waiting room will be enabled for all subpaths as well. If there are two waiting rooms on the same subpath, the waiting room for the most specific path will be chosen. Wildcards and query parameters are not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room#path WaitingRoom#path}

---

### WaitingRoomConfig <a name="WaitingRoomConfig" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import waiting_room

waitingRoom.WaitingRoomConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  host: str,
  name: str,
  new_users_per_minute: typing.Union[int, float],
  total_active_users: typing.Union[int, float],
  zone_id: str,
  additional_routes: typing.Union[IResolvable, typing.List[WaitingRoomAdditionalRoutes]] = None,
  cookie_attributes: WaitingRoomCookieAttributes = None,
  cookie_suffix: str = None,
  custom_page_html: str = None,
  default_template_language: str = None,
  description: str = None,
  disable_session_renewal: typing.Union[bool, IResolvable] = None,
  enabled_origin_commands: typing.List[str] = None,
  json_response_enabled: typing.Union[bool, IResolvable] = None,
  path: str = None,
  queue_all: typing.Union[bool, IResolvable] = None,
  queueing_method: str = None,
  queueing_status_code: typing.Union[int, float] = None,
  session_duration: typing.Union[int, float] = None,
  suspended: typing.Union[bool, IResolvable] = None,
  turnstile_action: str = None,
  turnstile_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.host">host</a></code> | <code>str</code> | The host name to which the waiting room will be applied (no wildcards). |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.name">name</a></code> | <code>str</code> | A unique name to identify the waiting room. Only alphanumeric characters, hyphens and underscores are allowed. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.newUsersPerMinute">new_users_per_minute</a></code> | <code>typing.Union[int, float]</code> | Sets the number of new users that will be let into the route every minute. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.totalActiveUsers">total_active_users</a></code> | <code>typing.Union[int, float]</code> | Sets the total number of active user sessions on the route at a point in time. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.additionalRoutes">additional_routes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutes">WaitingRoomAdditionalRoutes</a>]]</code> | Only available for the Waiting Room Advanced subscription. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.cookieAttributes">cookie_attributes</a></code> | <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributes">WaitingRoomCookieAttributes</a></code> | Configures cookie attributes for the waiting room cookie. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.cookieSuffix">cookie_suffix</a></code> | <code>str</code> | Appends a '_' + a custom suffix to the end of Cloudflare Waiting Room's cookie name(__cf_waitingroom). |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.customPageHtml">custom_page_html</a></code> | <code>str</code> | Only available for the Waiting Room Advanced subscription. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.defaultTemplateLanguage">default_template_language</a></code> | <code>str</code> | The language of the default page template. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.description">description</a></code> | <code>str</code> | A note that you can use to add more details about the waiting room. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.disableSessionRenewal">disable_session_renewal</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Only available for the Waiting Room Advanced subscription. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.enabledOriginCommands">enabled_origin_commands</a></code> | <code>typing.List[str]</code> | A list of enabled origin commands. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.jsonResponseEnabled">json_response_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Only available for the Waiting Room Advanced subscription. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.path">path</a></code> | <code>str</code> | Sets the path within the host to enable the waiting room on. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.queueAll">queue_all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If queue_all is `true`, all the traffic that is coming to a route will be sent to the waiting room. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.queueingMethod">queueing_method</a></code> | <code>str</code> | Sets the queueing method used by the waiting room. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.queueingStatusCode">queueing_status_code</a></code> | <code>typing.Union[int, float]</code> | HTTP status code returned to a user while in the queue. Available values: 200, 202, 429. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.sessionDuration">session_duration</a></code> | <code>typing.Union[int, float]</code> | Lifetime of a cookie (in minutes) set by Cloudflare for users who get access to the route. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.suspended">suspended</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Suspends or allows traffic going to the waiting room. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.turnstileAction">turnstile_action</a></code> | <code>str</code> | Which action to take when a bot is detected using Turnstile. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.turnstileMode">turnstile_mode</a></code> | <code>str</code> | Which Turnstile widget type to use for detecting bot traffic. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.host"></a>

```python
host: str
```

- *Type:* str

The host name to which the waiting room will be applied (no wildcards).

Please do not include the scheme (http:// or https://). The host and path combination must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room#host WaitingRoom#host}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A unique name to identify the waiting room. Only alphanumeric characters, hyphens and underscores are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room#name WaitingRoom#name}

---

##### `new_users_per_minute`<sup>Required</sup> <a name="new_users_per_minute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.newUsersPerMinute"></a>

```python
new_users_per_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Sets the number of new users that will be let into the route every minute.

This value is used as baseline for the number of users that are let in per minute. So it is possible that there is a little more or little less traffic coming to the route based on the traffic patterns at that time around the world.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room#new_users_per_minute WaitingRoom#new_users_per_minute}

---

##### `total_active_users`<sup>Required</sup> <a name="total_active_users" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.totalActiveUsers"></a>

```python
total_active_users: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Sets the total number of active user sessions on the route at a point in time.

A route is a combination of host and path on which a waiting room is available. This value is used as a baseline for the total number of active user sessions on the route. It is possible to have a situation where there are more or less active users sessions on the route based on the traffic patterns at that time around the world.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room#total_active_users WaitingRoom#total_active_users}

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room#zone_id WaitingRoom#zone_id}

---

##### `additional_routes`<sup>Optional</sup> <a name="additional_routes" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.additionalRoutes"></a>

```python
additional_routes: typing.Union[IResolvable, typing.List[WaitingRoomAdditionalRoutes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutes">WaitingRoomAdditionalRoutes</a>]]

Only available for the Waiting Room Advanced subscription.

Additional hostname and path combinations to which this waiting room will be applied. There is an implied wildcard at the end of the path. The hostname and path combination must be unique to this and all other waiting rooms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room#additional_routes WaitingRoom#additional_routes}

---

##### `cookie_attributes`<sup>Optional</sup> <a name="cookie_attributes" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.cookieAttributes"></a>

```python
cookie_attributes: WaitingRoomCookieAttributes
```

- *Type:* <a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributes">WaitingRoomCookieAttributes</a>

Configures cookie attributes for the waiting room cookie.

This encrypted cookie stores a user's status in the waiting room, such as queue position.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room#cookie_attributes WaitingRoom#cookie_attributes}

---

##### `cookie_suffix`<sup>Optional</sup> <a name="cookie_suffix" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.cookieSuffix"></a>

```python
cookie_suffix: str
```

- *Type:* str

Appends a '_' + a custom suffix to the end of Cloudflare Waiting Room's cookie name(__cf_waitingroom).

If `cookie_suffix` is "abcd", the cookie name will be `__cf_waitingroom_abcd`. This field is required if using `additional_routes`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room#cookie_suffix WaitingRoom#cookie_suffix}

---

##### `custom_page_html`<sup>Optional</sup> <a name="custom_page_html" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.customPageHtml"></a>

```python
custom_page_html: str
```

- *Type:* str

Only available for the Waiting Room Advanced subscription.

This is a template html file that will be rendered at the edge. If no custom_page_html is provided, the default waiting room will be used. The template is based on mustache ( https://mustache.github.io/ ). There are several variables that are evaluated by the Cloudflare edge:

1. {{`waitTimeKnown`}} Acts like a boolean value that indicates the behavior to take when wait time is not available, for instance when queue_all is **true**.
2. {{`waitTimeFormatted`}} Estimated wait time for the user. For example, five minutes. Alternatively, you can use:
3. {{`waitTime`}} Number of minutes of estimated wait for a user.
4. {{`waitTimeHours`}} Number of hours of estimated wait for a user (`Math.floor(waitTime/60)`).
5. {{`waitTimeHourMinutes`}} Number of minutes above the `waitTimeHours` value (`waitTime%60`).
6. {{`queueIsFull`}} Changes to **true** when no more people can be added to the queue.

To view the full list of variables, look at the `cfWaitingRoom` object described under the `json_response_enabled` property in other Waiting Room API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room#custom_page_html WaitingRoom#custom_page_html}

---

##### `default_template_language`<sup>Optional</sup> <a name="default_template_language" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.defaultTemplateLanguage"></a>

```python
default_template_language: str
```

- *Type:* str

The language of the default page template.

If no default_template_language is provided, then `en-US` (English) will be used.
Available values: "en-US", "es-ES", "de-DE", "fr-FR", "it-IT", "ja-JP", "ko-KR", "pt-BR", "zh-CN", "zh-TW", "nl-NL", "pl-PL", "id-ID", "tr-TR", "ar-EG", "ru-RU", "fa-IR", "bg-BG", "hr-HR", "cs-CZ", "da-DK", "fi-FI", "lt-LT", "ms-MY", "nb-NO", "ro-RO", "el-GR", "he-IL", "hi-IN", "hu-HU", "sr-BA", "sk-SK", "sl-SI", "sv-SE", "tl-PH", "th-TH", "uk-UA", "vi-VN".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room#default_template_language WaitingRoom#default_template_language}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A note that you can use to add more details about the waiting room.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room#description WaitingRoom#description}

---

##### `disable_session_renewal`<sup>Optional</sup> <a name="disable_session_renewal" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.disableSessionRenewal"></a>

```python
disable_session_renewal: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Only available for the Waiting Room Advanced subscription.

Disables automatic renewal of session cookies. If `true`, an accepted user will have session_duration minutes to browse the site. After that, they will have to go through the waiting room again. If `false`, a user's session cookie will be automatically renewed on every request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room#disable_session_renewal WaitingRoom#disable_session_renewal}

---

##### `enabled_origin_commands`<sup>Optional</sup> <a name="enabled_origin_commands" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.enabledOriginCommands"></a>

```python
enabled_origin_commands: typing.List[str]
```

- *Type:* typing.List[str]

A list of enabled origin commands.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room#enabled_origin_commands WaitingRoom#enabled_origin_commands}

---

##### `json_response_enabled`<sup>Optional</sup> <a name="json_response_enabled" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.jsonResponseEnabled"></a>

```python
json_response_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Only available for the Waiting Room Advanced subscription.

If `true`, requests to the waiting room with the header `Accept: application/json` will receive a JSON response object with information on the user's status in the waiting room as opposed to the configured static HTML page. This JSON response object has one property `cfWaitingRoom` which is an object containing the following fields:

1. `inWaitingRoom`: Boolean indicating if the user is in the waiting room (always **true**).
2. `waitTimeKnown`: Boolean indicating if the current estimated wait times are accurate. If **false**, they are not available.
3. `waitTime`: Valid only when `waitTimeKnown` is **true**. Integer indicating the current estimated time in minutes the user will wait in the waiting room. When `queueingMethod` is **random**, this is set to `waitTime50Percentile`.
4. `waitTime25Percentile`: Valid only when `queueingMethod` is **random** and `waitTimeKnown` is **true**. Integer indicating the current estimated maximum wait time for the 25% of users that gain entry the fastest (25th percentile).
5. `waitTime50Percentile`: Valid only when `queueingMethod` is **random** and `waitTimeKnown` is **true**. Integer indicating the current estimated maximum wait time for the 50% of users that gain entry the fastest (50th percentile). In other words, half of the queued users are expected to let into the origin website before `waitTime50Percentile` and half are expected to be let in after it.
6. `waitTime75Percentile`: Valid only when `queueingMethod` is **random** and `waitTimeKnown` is **true**. Integer indicating the current estimated maximum wait time for the 75% of users that gain entry the fastest (75th percentile).
7. `waitTimeFormatted`: String displaying the `waitTime` formatted in English for users. If `waitTimeKnown` is **false**, `waitTimeFormatted` will display **unavailable**.
8. `queueIsFull`: Boolean indicating if the waiting room's queue is currently full and not accepting new users at the moment.
9. `queueAll`: Boolean indicating if all users will be queued in the waiting room and no one will be let into the origin website.
10. `lastUpdated`: String displaying the timestamp as an ISO 8601 string of the user's last attempt to leave the waiting room and be let into the origin website. The user is able to make another attempt after `refreshIntervalSeconds` past this time. If the user makes a request too soon, it will be ignored and `lastUpdated` will not change.
11. `refreshIntervalSeconds`: Integer indicating the number of seconds after `lastUpdated` until the user is able to make another attempt to leave the waiting room and be let into the origin website. When the `queueingMethod` is `reject`, there is no specified refresh time —_it will always be **zero**.
12. `queueingMethod`: The queueing method currently used by the waiting room. It is either **fifo**, **random**, **passthrough**, or **reject**.
13. `isFIFOQueue`: Boolean indicating if the waiting room uses a FIFO (First-In-First-Out) queue.
14. `isRandomQueue`: Boolean indicating if the waiting room uses a Random queue where users gain access randomly.
15. `isPassthroughQueue`: Boolean indicating if the waiting room uses a passthrough queue. Keep in mind that when passthrough is enabled, this JSON response will only exist when `queueAll` is **true** or `isEventPrequeueing` is **true** because in all other cases requests will go directly to the origin.
16. `isRejectQueue`: Boolean indicating if the waiting room uses a reject queue.
17. `isEventActive`: Boolean indicating if an event is currently occurring. Events are able to change a waiting room's behavior during a specified period of time. For additional information, look at the event properties `prequeue_start_time`, `event_start_time`, and `event_end_time` in the documentation for creating waiting room events. Events are considered active between these start and end times, as well as during the prequeueing period if it exists.
18. `isEventPrequeueing`: Valid only when `isEventActive` is **true**. Boolean indicating if an event is currently prequeueing users before it starts.
19. `timeUntilEventStart`: Valid only when `isEventPrequeueing` is **true**. Integer indicating the number of minutes until the event starts.
20. `timeUntilEventStartFormatted`: String displaying the `timeUntilEventStart` formatted in English for users. If `isEventPrequeueing` is **false**, `timeUntilEventStartFormatted` will display **unavailable**.
21. `timeUntilEventEnd`: Valid only when `isEventActive` is **true**. Integer indicating the number of minutes until the event ends.
22. `timeUntilEventEndFormatted`: String displaying the `timeUntilEventEnd` formatted in English for users. If `isEventActive` is **false**, `timeUntilEventEndFormatted` will display **unavailable**.
23. `shuffleAtEventStart`: Valid only when `isEventActive` is **true**. Boolean indicating if the users in the prequeue are shuffled randomly when the event starts.
24. `turnstile`: Empty when turnstile isn't enabled. String displaying an html tag to display the Turnstile widget. Please add the `{{{turnstile}}}` tag to the `custom_html` template to ensure the Turnstile widget appears.
25. `infiniteQueue`: Boolean indicating whether the response is for a user in the infinite queue.

An example cURL to a waiting room could be:

```
curl -X GET "https://example.com/waitingroom" \
	-H "Accept: application/json"
```

If `json_response_enabled` is **true** and the request hits the waiting room, an example JSON response when `queueingMethod` is **fifo** and no event is active could be:

```
{
	"cfWaitingRoom": {
		"inWaitingRoom": true,
		"waitTimeKnown": true,
		"waitTime": 10,
		"waitTime25Percentile": 0,
		"waitTime50Percentile": 0,
		"waitTime75Percentile": 0,
		"waitTimeFormatted": "10 minutes",
		"queueIsFull": false,
		"queueAll": false,
		"lastUpdated": "2020-08-03T23:46:00.000Z",
		"refreshIntervalSeconds": 20,
		"queueingMethod": "fifo",
		"isFIFOQueue": true,
		"isRandomQueue": false,
		"isPassthroughQueue": false,
		"isRejectQueue": false,
		"isEventActive": false,
		"isEventPrequeueing": false,
		"timeUntilEventStart": 0,
		"timeUntilEventStartFormatted": "unavailable",
		"timeUntilEventEnd": 0,
		"timeUntilEventEndFormatted": "unavailable",
		"shuffleAtEventStart": false
	}
}
```

If `json_response_enabled` is **true** and the request hits the waiting room, an example JSON response when `queueingMethod` is **random** and an event is active could be:

```
{
	"cfWaitingRoom": {
		"inWaitingRoom": true,
		"waitTimeKnown": true,
		"waitTime": 10,
		"waitTime25Percentile": 5,
		"waitTime50Percentile": 10,
		"waitTime75Percentile": 15,
		"waitTimeFormatted": "5 minutes to 15 minutes",
		"queueIsFull": false,
		"queueAll": false,
		"lastUpdated": "2020-08-03T23:46:00.000Z",
		"refreshIntervalSeconds": 20,
		"queueingMethod": "random",
		"isFIFOQueue": false,
		"isRandomQueue": true,
		"isPassthroughQueue": false,
		"isRejectQueue": false,
		"isEventActive": true,
		"isEventPrequeueing": false,
		"timeUntilEventStart": 0,
		"timeUntilEventStartFormatted": "unavailable",
		"timeUntilEventEnd": 15,
		"timeUntilEventEndFormatted": "15 minutes",
		"shuffleAtEventStart": true
	}
}
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room#json_response_enabled WaitingRoom#json_response_enabled}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.path"></a>

```python
path: str
```

- *Type:* str

Sets the path within the host to enable the waiting room on.

The waiting room will be enabled for all subpaths as well. If there are two waiting rooms on the same subpath, the waiting room for the most specific path will be chosen. Wildcards and query parameters are not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room#path WaitingRoom#path}

---

##### `queue_all`<sup>Optional</sup> <a name="queue_all" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.queueAll"></a>

```python
queue_all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If queue_all is `true`, all the traffic that is coming to a route will be sent to the waiting room.

No new traffic can get to the route once this field is set and estimated time will become unavailable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room#queue_all WaitingRoom#queue_all}

---

##### `queueing_method`<sup>Optional</sup> <a name="queueing_method" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.queueingMethod"></a>

```python
queueing_method: str
```

- *Type:* str

Sets the queueing method used by the waiting room.

Changing this parameter from the **default** queueing method is only available for the Waiting Room Advanced subscription. Regardless of the queueing method, if `queue_all` is enabled or an event is prequeueing, users in the waiting room will not be accepted to the origin. These users will always see a waiting room page that refreshes automatically. The valid queueing methods are:

1. `fifo` **(default)**: First-In-First-Out queue where customers gain access in the order they arrived.
2. `random`: Random queue where customers gain access randomly, regardless of arrival time.
3. `passthrough`: Users will pass directly through the waiting room and into the origin website. As a result, any configured limits will not be respected while this is enabled. This method can be used as an alternative to disabling a waiting room (with `suspended`) so that analytics are still reported. This can be used if you wish to allow all traffic normally, but want to restrict traffic during a waiting room event, or vice versa.
4. `reject`: Users will be immediately rejected from the waiting room. As a result, no users will reach the origin website while this is enabled. This can be used if you wish to reject all traffic while performing maintenance, block traffic during a specified period of time (an event), or block traffic while events are not occurring. Consider a waiting room used for vaccine distribution that only allows traffic during sign-up events, and otherwise blocks all traffic. For this case, the waiting room uses `reject`, and its events override this with `fifo`, `random`, or `passthrough`. When this queueing method is enabled and neither `queueAll` is enabled nor an event is prequeueing, the waiting room page **will not refresh automatically**.
   Available values: "fifo", "random", "passthrough", "reject".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room#queueing_method WaitingRoom#queueing_method}

---

##### `queueing_status_code`<sup>Optional</sup> <a name="queueing_status_code" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.queueingStatusCode"></a>

```python
queueing_status_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

HTTP status code returned to a user while in the queue. Available values: 200, 202, 429.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room#queueing_status_code WaitingRoom#queueing_status_code}

---

##### `session_duration`<sup>Optional</sup> <a name="session_duration" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.sessionDuration"></a>

```python
session_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Lifetime of a cookie (in minutes) set by Cloudflare for users who get access to the route.

If a user is not seen by Cloudflare again in that time period, they will be treated as a new user that visits the route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room#session_duration WaitingRoom#session_duration}

---

##### `suspended`<sup>Optional</sup> <a name="suspended" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.suspended"></a>

```python
suspended: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Suspends or allows traffic going to the waiting room.

If set to `true`, the traffic will not go to the waiting room.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room#suspended WaitingRoom#suspended}

---

##### `turnstile_action`<sup>Optional</sup> <a name="turnstile_action" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.turnstileAction"></a>

```python
turnstile_action: str
```

- *Type:* str

Which action to take when a bot is detected using Turnstile.

`log` will
have no impact on queueing behavior, simply keeping track of how many
bots are detected in Waiting Room Analytics. `infinite_queue` will send
bots to a false queueing state, where they will never reach your
origin. `infinite_queue` requires Advanced Waiting Room.
Available values: "log", "infinite_queue".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room#turnstile_action WaitingRoom#turnstile_action}

---

##### `turnstile_mode`<sup>Optional</sup> <a name="turnstile_mode" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.turnstileMode"></a>

```python
turnstile_mode: str
```

- *Type:* str

Which Turnstile widget type to use for detecting bot traffic.

See
[the Turnstile documentation](https://developers.cloudflare.com/turnstile/concepts/widget/#widget-types)
for the definitions of these widget types. Set to `off` to disable the
Turnstile integration entirely. Setting this to anything other than
`off` or `invisible` requires Advanced Waiting Room.
Available values: "off", "invisible", "visible_non_interactive", "visible_managed".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room#turnstile_mode WaitingRoom#turnstile_mode}

---

### WaitingRoomCookieAttributes <a name="WaitingRoomCookieAttributes" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributes.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import waiting_room

waitingRoom.WaitingRoomCookieAttributes(
  samesite: str = None,
  secure: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributes.property.samesite">samesite</a></code> | <code>str</code> | Configures the SameSite attribute on the waiting room cookie. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributes.property.secure">secure</a></code> | <code>str</code> | Configures the Secure attribute on the waiting room cookie. |

---

##### `samesite`<sup>Optional</sup> <a name="samesite" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributes.property.samesite"></a>

```python
samesite: str
```

- *Type:* str

Configures the SameSite attribute on the waiting room cookie.

Value `auto` will be translated to `lax` or `none` depending if **Always Use HTTPS** is enabled. Note that when using value `none`, the secure attribute cannot be set to `never`.
Available values: "auto", "lax", "none", "strict".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room#samesite WaitingRoom#samesite}

---

##### `secure`<sup>Optional</sup> <a name="secure" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributes.property.secure"></a>

```python
secure: str
```

- *Type:* str

Configures the Secure attribute on the waiting room cookie.

Value `always` indicates that the Secure attribute will be set in the Set-Cookie header, `never` indicates that the Secure attribute will not be set, and `auto` will set the Secure attribute depending if **Always Use HTTPS** is enabled.
Available values: "auto", "always", "never".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/waiting_room#secure WaitingRoom#secure}

---

## Classes <a name="Classes" id="Classes"></a>

### WaitingRoomAdditionalRoutesList <a name="WaitingRoomAdditionalRoutesList" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import waiting_room

waitingRoom.WaitingRoomAdditionalRoutesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WaitingRoomAdditionalRoutesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutes">WaitingRoomAdditionalRoutes</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WaitingRoomAdditionalRoutes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutes">WaitingRoomAdditionalRoutes</a>]]

---


### WaitingRoomAdditionalRoutesOutputReference <a name="WaitingRoomAdditionalRoutesOutputReference" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import waiting_room

waitingRoom.WaitingRoomAdditionalRoutesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_host` <a name="reset_host" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutes">WaitingRoomAdditionalRoutes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WaitingRoomAdditionalRoutes]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutes">WaitingRoomAdditionalRoutes</a>]

---


### WaitingRoomCookieAttributesOutputReference <a name="WaitingRoomCookieAttributesOutputReference" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import waiting_room

waitingRoom.WaitingRoomCookieAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.resetSamesite">reset_samesite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.resetSecure">reset_secure</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_samesite` <a name="reset_samesite" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.resetSamesite"></a>

```python
def reset_samesite() -> None
```

##### `reset_secure` <a name="reset_secure" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.resetSecure"></a>

```python
def reset_secure() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.property.samesiteInput">samesite_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.property.secureInput">secure_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.property.samesite">samesite</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.property.secure">secure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributes">WaitingRoomCookieAttributes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `samesite_input`<sup>Optional</sup> <a name="samesite_input" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.property.samesiteInput"></a>

```python
samesite_input: str
```

- *Type:* str

---

##### `secure_input`<sup>Optional</sup> <a name="secure_input" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.property.secureInput"></a>

```python
secure_input: str
```

- *Type:* str

---

##### `samesite`<sup>Required</sup> <a name="samesite" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.property.samesite"></a>

```python
samesite: str
```

- *Type:* str

---

##### `secure`<sup>Required</sup> <a name="secure" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.property.secure"></a>

```python
secure: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WaitingRoomCookieAttributes]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomCookieAttributes">WaitingRoomCookieAttributes</a>]

---



