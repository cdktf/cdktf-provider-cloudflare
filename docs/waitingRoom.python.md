# `cloudflare_waiting_room`

Refer to the Terraform Registory for docs: [`cloudflare_waiting_room`](https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room).

# `waitingRoom` Submodule <a name="`waitingRoom` Submodule" id="@cdktf/provider-cloudflare.waitingRoom"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WaitingRoom <a name="WaitingRoom" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room cloudflare_waiting_room}.

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
  cookie_suffix: str = None,
  custom_page_html: str = None,
  default_template_language: str = None,
  description: str = None,
  disable_session_renewal: typing.Union[bool, IResolvable] = None,
  id: str = None,
  json_response_enabled: typing.Union[bool, IResolvable] = None,
  path: str = None,
  queue_all: typing.Union[bool, IResolvable] = None,
  queueing_method: str = None,
  queueing_status_code: typing.Union[int, float] = None,
  session_duration: typing.Union[int, float] = None,
  suspended: typing.Union[bool, IResolvable] = None,
  timeouts: WaitingRoomTimeouts = None
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
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.host">host</a></code> | <code>str</code> | Host name for which the waiting room will be applied (no wildcards). |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.name">name</a></code> | <code>str</code> | A unique name to identify the waiting room. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.newUsersPerMinute">new_users_per_minute</a></code> | <code>typing.Union[int, float]</code> | The number of new users that will be let into the route every minute. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.totalActiveUsers">total_active_users</a></code> | <code>typing.Union[int, float]</code> | The total number of active user sessions on the route at a point in time. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.additionalRoutes">additional_routes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutes">WaitingRoomAdditionalRoutes</a>]]</code> | additional_routes block. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.cookieSuffix">cookie_suffix</a></code> | <code>str</code> | A cookie suffix to be appended to the Cloudflare waiting room cookie name. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.customPageHtml">custom_page_html</a></code> | <code>str</code> | This is a templated html file that will be rendered at the edge. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.defaultTemplateLanguage">default_template_language</a></code> | <code>str</code> | The language to use for the default waiting room page. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.description">description</a></code> | <code>str</code> | A description to add more details about the waiting room. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.disableSessionRenewal">disable_session_renewal</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disables automatic renewal of session cookies. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room#id WaitingRoom#id}. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.jsonResponseEnabled">json_response_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, requests to the waiting room with the header `Accept: application/json` will receive a JSON response object. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.path">path</a></code> | <code>str</code> | The path within the host to enable the waiting room on. Defaults to `/`. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.queueAll">queue_all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If queue_all is true, then all traffic will be sent to the waiting room. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.queueingMethod">queueing_method</a></code> | <code>str</code> | The queueing method used by the waiting room. Available values: `fifo`, `random`, `passthrough`, `reject`. Defaults to `fifo`. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.queueingStatusCode">queueing_status_code</a></code> | <code>typing.Union[int, float]</code> | HTTP status code returned to a user while in the queue. Defaults to `200`. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.sessionDuration">session_duration</a></code> | <code>typing.Union[int, float]</code> | Lifetime of a cookie (in minutes) set by Cloudflare for users who get access to the origin. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.suspended">suspended</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Suspends the waiting room. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeouts">WaitingRoomTimeouts</a></code> | timeouts block. |

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

Host name for which the waiting room will be applied (no wildcards).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room#host WaitingRoom#host}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.name"></a>

- *Type:* str

A unique name to identify the waiting room. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room#name WaitingRoom#name}

---

##### `new_users_per_minute`<sup>Required</sup> <a name="new_users_per_minute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.newUsersPerMinute"></a>

- *Type:* typing.Union[int, float]

The number of new users that will be let into the route every minute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room#new_users_per_minute WaitingRoom#new_users_per_minute}

---

##### `total_active_users`<sup>Required</sup> <a name="total_active_users" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.totalActiveUsers"></a>

- *Type:* typing.Union[int, float]

The total number of active user sessions on the route at a point in time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room#total_active_users WaitingRoom#total_active_users}

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.zoneId"></a>

- *Type:* str

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room#zone_id WaitingRoom#zone_id}

---

##### `additional_routes`<sup>Optional</sup> <a name="additional_routes" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.additionalRoutes"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutes">WaitingRoomAdditionalRoutes</a>]]

additional_routes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room#additional_routes WaitingRoom#additional_routes}

---

##### `cookie_suffix`<sup>Optional</sup> <a name="cookie_suffix" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.cookieSuffix"></a>

- *Type:* str

A cookie suffix to be appended to the Cloudflare waiting room cookie name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room#cookie_suffix WaitingRoom#cookie_suffix}

---

##### `custom_page_html`<sup>Optional</sup> <a name="custom_page_html" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.customPageHtml"></a>

- *Type:* str

This is a templated html file that will be rendered at the edge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room#custom_page_html WaitingRoom#custom_page_html}

---

##### `default_template_language`<sup>Optional</sup> <a name="default_template_language" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.defaultTemplateLanguage"></a>

- *Type:* str

The language to use for the default waiting room page.

Available values: `de-DE`, `es-ES`, `en-US`, `fr-FR`, `id-ID`, `it-IT`, `ja-JP`, `ko-KR`, `nl-NL`, `pl-PL`, `pt-BR`, `tr-TR`, `zh-CN`, `zh-TW`, `ru-RU`, `fa-IR`. Defaults to `en-US`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room#default_template_language WaitingRoom#default_template_language}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.description"></a>

- *Type:* str

A description to add more details about the waiting room.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room#description WaitingRoom#description}

---

##### `disable_session_renewal`<sup>Optional</sup> <a name="disable_session_renewal" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.disableSessionRenewal"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disables automatic renewal of session cookies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room#disable_session_renewal WaitingRoom#disable_session_renewal}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room#id WaitingRoom#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `json_response_enabled`<sup>Optional</sup> <a name="json_response_enabled" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.jsonResponseEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, requests to the waiting room with the header `Accept: application/json` will receive a JSON response object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room#json_response_enabled WaitingRoom#json_response_enabled}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.path"></a>

- *Type:* str

The path within the host to enable the waiting room on. Defaults to `/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room#path WaitingRoom#path}

---

##### `queue_all`<sup>Optional</sup> <a name="queue_all" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.queueAll"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If queue_all is true, then all traffic will be sent to the waiting room.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room#queue_all WaitingRoom#queue_all}

---

##### `queueing_method`<sup>Optional</sup> <a name="queueing_method" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.queueingMethod"></a>

- *Type:* str

The queueing method used by the waiting room. Available values: `fifo`, `random`, `passthrough`, `reject`. Defaults to `fifo`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room#queueing_method WaitingRoom#queueing_method}

---

##### `queueing_status_code`<sup>Optional</sup> <a name="queueing_status_code" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.queueingStatusCode"></a>

- *Type:* typing.Union[int, float]

HTTP status code returned to a user while in the queue. Defaults to `200`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room#queueing_status_code WaitingRoom#queueing_status_code}

---

##### `session_duration`<sup>Optional</sup> <a name="session_duration" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.sessionDuration"></a>

- *Type:* typing.Union[int, float]

Lifetime of a cookie (in minutes) set by Cloudflare for users who get access to the origin.

Defaults to `5`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room#session_duration WaitingRoom#session_duration}

---

##### `suspended`<sup>Optional</sup> <a name="suspended" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.suspended"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Suspends the waiting room.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room#suspended WaitingRoom#suspended}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeouts">WaitingRoomTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room#timeouts WaitingRoom#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
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
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.putAdditionalRoutes">put_additional_routes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetAdditionalRoutes">reset_additional_routes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetCookieSuffix">reset_cookie_suffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetCustomPageHtml">reset_custom_page_html</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetDefaultTemplateLanguage">reset_default_template_language</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetDisableSessionRenewal">reset_disable_session_renewal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetJsonResponseEnabled">reset_json_response_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetQueueAll">reset_queue_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetQueueingMethod">reset_queueing_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetQueueingStatusCode">reset_queueing_status_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetSessionDuration">reset_session_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetSuspended">reset_suspended</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetTimeouts">reset_timeouts</a></code> | *No description.* |

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

##### `put_additional_routes` <a name="put_additional_routes" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.putAdditionalRoutes"></a>

```python
def put_additional_routes(
  value: typing.Union[IResolvable, typing.List[WaitingRoomAdditionalRoutes]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.putAdditionalRoutes.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutes">WaitingRoomAdditionalRoutes</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room#create WaitingRoom#create}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room#update WaitingRoom#update}.

---

##### `reset_additional_routes` <a name="reset_additional_routes" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetAdditionalRoutes"></a>

```python
def reset_additional_routes() -> None
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

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetId"></a>

```python
def reset_id() -> None
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

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.resetTimeouts"></a>

```python
def reset_timeouts() -> None
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

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room#import import section} in the documentation of this resource for the id to use

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
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference">WaitingRoomTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.additionalRoutesInput">additional_routes_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutes">WaitingRoomAdditionalRoutes</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.cookieSuffixInput">cookie_suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.customPageHtmlInput">custom_page_html_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.defaultTemplateLanguageInput">default_template_language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.disableSessionRenewalInput">disable_session_renewal_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.jsonResponseEnabledInput">json_response_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.newUsersPerMinuteInput">new_users_per_minute_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.queueAllInput">queue_all_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.queueingMethodInput">queueing_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.queueingStatusCodeInput">queueing_status_code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.sessionDurationInput">session_duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.suspendedInput">suspended_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeouts">WaitingRoomTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.totalActiveUsersInput">total_active_users_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.cookieSuffix">cookie_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.customPageHtml">custom_page_html</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.defaultTemplateLanguage">default_template_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.disableSessionRenewal">disable_session_renewal</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.id">id</a></code> | <code>str</code> | *No description.* |
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

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.timeouts"></a>

```python
timeouts: WaitingRoomTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference">WaitingRoomTimeoutsOutputReference</a>

---

##### `additional_routes_input`<sup>Optional</sup> <a name="additional_routes_input" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.additionalRoutesInput"></a>

```python
additional_routes_input: typing.Union[IResolvable, typing.List[WaitingRoomAdditionalRoutes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutes">WaitingRoomAdditionalRoutes</a>]]

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

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.idInput"></a>

```python
id_input: str
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

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, WaitingRoomTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeouts">WaitingRoomTimeouts</a>]

---

##### `total_active_users_input`<sup>Optional</sup> <a name="total_active_users_input" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.totalActiveUsersInput"></a>

```python
total_active_users_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

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

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoom.property.id"></a>

```python
id: str
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
  host: str,
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutes.property.host">host</a></code> | <code>str</code> | The additional host name for which the waiting room to be applied on (no wildcards). |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutes.property.path">path</a></code> | <code>str</code> | The path within the additional host to enable the waiting room on. Defaults to `/`. |

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutes.property.host"></a>

```python
host: str
```

- *Type:* str

The additional host name for which the waiting room to be applied on (no wildcards).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room#host WaitingRoom#host}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutes.property.path"></a>

```python
path: str
```

- *Type:* str

The path within the additional host to enable the waiting room on. Defaults to `/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room#path WaitingRoom#path}

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
  cookie_suffix: str = None,
  custom_page_html: str = None,
  default_template_language: str = None,
  description: str = None,
  disable_session_renewal: typing.Union[bool, IResolvable] = None,
  id: str = None,
  json_response_enabled: typing.Union[bool, IResolvable] = None,
  path: str = None,
  queue_all: typing.Union[bool, IResolvable] = None,
  queueing_method: str = None,
  queueing_status_code: typing.Union[int, float] = None,
  session_duration: typing.Union[int, float] = None,
  suspended: typing.Union[bool, IResolvable] = None,
  timeouts: WaitingRoomTimeouts = None
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
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.host">host</a></code> | <code>str</code> | Host name for which the waiting room will be applied (no wildcards). |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.name">name</a></code> | <code>str</code> | A unique name to identify the waiting room. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.newUsersPerMinute">new_users_per_minute</a></code> | <code>typing.Union[int, float]</code> | The number of new users that will be let into the route every minute. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.totalActiveUsers">total_active_users</a></code> | <code>typing.Union[int, float]</code> | The total number of active user sessions on the route at a point in time. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.zoneId">zone_id</a></code> | <code>str</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.additionalRoutes">additional_routes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutes">WaitingRoomAdditionalRoutes</a>]]</code> | additional_routes block. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.cookieSuffix">cookie_suffix</a></code> | <code>str</code> | A cookie suffix to be appended to the Cloudflare waiting room cookie name. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.customPageHtml">custom_page_html</a></code> | <code>str</code> | This is a templated html file that will be rendered at the edge. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.defaultTemplateLanguage">default_template_language</a></code> | <code>str</code> | The language to use for the default waiting room page. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.description">description</a></code> | <code>str</code> | A description to add more details about the waiting room. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.disableSessionRenewal">disable_session_renewal</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disables automatic renewal of session cookies. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room#id WaitingRoom#id}. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.jsonResponseEnabled">json_response_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, requests to the waiting room with the header `Accept: application/json` will receive a JSON response object. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.path">path</a></code> | <code>str</code> | The path within the host to enable the waiting room on. Defaults to `/`. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.queueAll">queue_all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If queue_all is true, then all traffic will be sent to the waiting room. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.queueingMethod">queueing_method</a></code> | <code>str</code> | The queueing method used by the waiting room. Available values: `fifo`, `random`, `passthrough`, `reject`. Defaults to `fifo`. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.queueingStatusCode">queueing_status_code</a></code> | <code>typing.Union[int, float]</code> | HTTP status code returned to a user while in the queue. Defaults to `200`. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.sessionDuration">session_duration</a></code> | <code>typing.Union[int, float]</code> | Lifetime of a cookie (in minutes) set by Cloudflare for users who get access to the origin. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.suspended">suspended</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Suspends the waiting room. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeouts">WaitingRoomTimeouts</a></code> | timeouts block. |

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

Host name for which the waiting room will be applied (no wildcards).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room#host WaitingRoom#host}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A unique name to identify the waiting room. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room#name WaitingRoom#name}

---

##### `new_users_per_minute`<sup>Required</sup> <a name="new_users_per_minute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.newUsersPerMinute"></a>

```python
new_users_per_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of new users that will be let into the route every minute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room#new_users_per_minute WaitingRoom#new_users_per_minute}

---

##### `total_active_users`<sup>Required</sup> <a name="total_active_users" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.totalActiveUsers"></a>

```python
total_active_users: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The total number of active user sessions on the route at a point in time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room#total_active_users WaitingRoom#total_active_users}

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room#zone_id WaitingRoom#zone_id}

---

##### `additional_routes`<sup>Optional</sup> <a name="additional_routes" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.additionalRoutes"></a>

```python
additional_routes: typing.Union[IResolvable, typing.List[WaitingRoomAdditionalRoutes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutes">WaitingRoomAdditionalRoutes</a>]]

additional_routes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room#additional_routes WaitingRoom#additional_routes}

---

##### `cookie_suffix`<sup>Optional</sup> <a name="cookie_suffix" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.cookieSuffix"></a>

```python
cookie_suffix: str
```

- *Type:* str

A cookie suffix to be appended to the Cloudflare waiting room cookie name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room#cookie_suffix WaitingRoom#cookie_suffix}

---

##### `custom_page_html`<sup>Optional</sup> <a name="custom_page_html" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.customPageHtml"></a>

```python
custom_page_html: str
```

- *Type:* str

This is a templated html file that will be rendered at the edge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room#custom_page_html WaitingRoom#custom_page_html}

---

##### `default_template_language`<sup>Optional</sup> <a name="default_template_language" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.defaultTemplateLanguage"></a>

```python
default_template_language: str
```

- *Type:* str

The language to use for the default waiting room page.

Available values: `de-DE`, `es-ES`, `en-US`, `fr-FR`, `id-ID`, `it-IT`, `ja-JP`, `ko-KR`, `nl-NL`, `pl-PL`, `pt-BR`, `tr-TR`, `zh-CN`, `zh-TW`, `ru-RU`, `fa-IR`. Defaults to `en-US`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room#default_template_language WaitingRoom#default_template_language}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description to add more details about the waiting room.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room#description WaitingRoom#description}

---

##### `disable_session_renewal`<sup>Optional</sup> <a name="disable_session_renewal" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.disableSessionRenewal"></a>

```python
disable_session_renewal: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disables automatic renewal of session cookies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room#disable_session_renewal WaitingRoom#disable_session_renewal}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room#id WaitingRoom#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `json_response_enabled`<sup>Optional</sup> <a name="json_response_enabled" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.jsonResponseEnabled"></a>

```python
json_response_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, requests to the waiting room with the header `Accept: application/json` will receive a JSON response object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room#json_response_enabled WaitingRoom#json_response_enabled}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.path"></a>

```python
path: str
```

- *Type:* str

The path within the host to enable the waiting room on. Defaults to `/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room#path WaitingRoom#path}

---

##### `queue_all`<sup>Optional</sup> <a name="queue_all" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.queueAll"></a>

```python
queue_all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If queue_all is true, then all traffic will be sent to the waiting room.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room#queue_all WaitingRoom#queue_all}

---

##### `queueing_method`<sup>Optional</sup> <a name="queueing_method" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.queueingMethod"></a>

```python
queueing_method: str
```

- *Type:* str

The queueing method used by the waiting room. Available values: `fifo`, `random`, `passthrough`, `reject`. Defaults to `fifo`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room#queueing_method WaitingRoom#queueing_method}

---

##### `queueing_status_code`<sup>Optional</sup> <a name="queueing_status_code" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.queueingStatusCode"></a>

```python
queueing_status_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

HTTP status code returned to a user while in the queue. Defaults to `200`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room#queueing_status_code WaitingRoom#queueing_status_code}

---

##### `session_duration`<sup>Optional</sup> <a name="session_duration" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.sessionDuration"></a>

```python
session_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Lifetime of a cookie (in minutes) set by Cloudflare for users who get access to the origin.

Defaults to `5`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room#session_duration WaitingRoom#session_duration}

---

##### `suspended`<sup>Optional</sup> <a name="suspended" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.suspended"></a>

```python
suspended: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Suspends the waiting room.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room#suspended WaitingRoom#suspended}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomConfig.property.timeouts"></a>

```python
timeouts: WaitingRoomTimeouts
```

- *Type:* <a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeouts">WaitingRoomTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room#timeouts WaitingRoom#timeouts}

---

### WaitingRoomTimeouts <a name="WaitingRoomTimeouts" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import waiting_room

waitingRoom.WaitingRoomTimeouts(
  create: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room#create WaitingRoom#create}. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room#update WaitingRoom#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room#create WaitingRoom#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.18.0/docs/resources/waiting_room#update WaitingRoom#update}.

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
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomAdditionalRoutesList.get">get</a></code> | *No description.* |

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


### WaitingRoomTimeoutsOutputReference <a name="WaitingRoomTimeoutsOutputReference" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import waiting_room

waitingRoom.WaitingRoomTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeouts">WaitingRoomTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WaitingRoomTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.waitingRoom.WaitingRoomTimeouts">WaitingRoomTimeouts</a>]

---



