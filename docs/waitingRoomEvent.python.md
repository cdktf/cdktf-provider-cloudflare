# `cloudflare_waiting_room_event`

Refer to the Terraform Registory for docs: [`cloudflare_waiting_room_event`](https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/waiting_room_event).

# `waitingRoomEvent` Submodule <a name="`waitingRoomEvent` Submodule" id="@cdktf/provider-cloudflare.waitingRoomEvent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WaitingRoomEvent <a name="WaitingRoomEvent" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/waiting_room_event cloudflare_waiting_room_event}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import waiting_room_event

waitingRoomEvent.WaitingRoomEvent(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  event_end_time: str,
  event_start_time: str,
  name: str,
  waiting_room_id: str,
  zone_id: str,
  custom_page_html: str = None,
  description: str = None,
  disable_session_renewal: typing.Union[bool, IResolvable] = None,
  id: str = None,
  new_users_per_minute: typing.Union[int, float] = None,
  prequeue_start_time: str = None,
  queueing_method: str = None,
  session_duration: typing.Union[int, float] = None,
  shuffle_at_event_start: typing.Union[bool, IResolvable] = None,
  suspended: typing.Union[bool, IResolvable] = None,
  total_active_users: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.eventEndTime">event_end_time</a></code> | <code>str</code> | ISO 8601 timestamp that marks the end of the event. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.eventStartTime">event_start_time</a></code> | <code>str</code> | ISO 8601 timestamp that marks the start of the event. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.name">name</a></code> | <code>str</code> | A unique name to identify the event. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.waitingRoomId">waiting_room_id</a></code> | <code>str</code> | The Waiting Room ID the event should apply to. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.customPageHtml">custom_page_html</a></code> | <code>str</code> | This is a templated html file that will be rendered at the edge. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.description">description</a></code> | <code>str</code> | A description to let users add more details about the event. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.disableSessionRenewal">disable_session_renewal</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disables automatic renewal of session cookies. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/waiting_room_event#id WaitingRoomEvent#id}. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.newUsersPerMinute">new_users_per_minute</a></code> | <code>typing.Union[int, float]</code> | The number of new users that will be let into the route every minute. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.prequeueStartTime">prequeue_start_time</a></code> | <code>str</code> | ISO 8601 timestamp that marks when to begin queueing all users before the event starts. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.queueingMethod">queueing_method</a></code> | <code>str</code> | The queueing method used by the waiting room. Available values: `fifo`, `random`, `passthrough`, `reject`. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.sessionDuration">session_duration</a></code> | <code>typing.Union[int, float]</code> | Lifetime of a cookie (in minutes) set by Cloudflare for users who get access to the origin. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.shuffleAtEventStart">shuffle_at_event_start</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Users in the prequeue will be shuffled randomly at the `event_start_time`. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.suspended">suspended</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If suspended, the event is ignored and traffic will be handled based on the waiting room configuration. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.totalActiveUsers">total_active_users</a></code> | <code>typing.Union[int, float]</code> | The total number of active user sessions on the route at a point in time. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `event_end_time`<sup>Required</sup> <a name="event_end_time" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.eventEndTime"></a>

- *Type:* str

ISO 8601 timestamp that marks the end of the event.

**Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/waiting_room_event#event_end_time WaitingRoomEvent#event_end_time}

---

##### `event_start_time`<sup>Required</sup> <a name="event_start_time" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.eventStartTime"></a>

- *Type:* str

ISO 8601 timestamp that marks the start of the event.

Must occur at least 1 minute before `event_end_time`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/waiting_room_event#event_start_time WaitingRoomEvent#event_start_time}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.name"></a>

- *Type:* str

A unique name to identify the event.

Only alphanumeric characters, hyphens, and underscores are allowed. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/waiting_room_event#name WaitingRoomEvent#name}

---

##### `waiting_room_id`<sup>Required</sup> <a name="waiting_room_id" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.waitingRoomId"></a>

- *Type:* str

The Waiting Room ID the event should apply to. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/waiting_room_event#waiting_room_id WaitingRoomEvent#waiting_room_id}

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.zoneId"></a>

- *Type:* str

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/waiting_room_event#zone_id WaitingRoomEvent#zone_id}

---

##### `custom_page_html`<sup>Optional</sup> <a name="custom_page_html" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.customPageHtml"></a>

- *Type:* str

This is a templated html file that will be rendered at the edge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/waiting_room_event#custom_page_html WaitingRoomEvent#custom_page_html}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.description"></a>

- *Type:* str

A description to let users add more details about the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/waiting_room_event#description WaitingRoomEvent#description}

---

##### `disable_session_renewal`<sup>Optional</sup> <a name="disable_session_renewal" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.disableSessionRenewal"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disables automatic renewal of session cookies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/waiting_room_event#disable_session_renewal WaitingRoomEvent#disable_session_renewal}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/waiting_room_event#id WaitingRoomEvent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `new_users_per_minute`<sup>Optional</sup> <a name="new_users_per_minute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.newUsersPerMinute"></a>

- *Type:* typing.Union[int, float]

The number of new users that will be let into the route every minute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/waiting_room_event#new_users_per_minute WaitingRoomEvent#new_users_per_minute}

---

##### `prequeue_start_time`<sup>Optional</sup> <a name="prequeue_start_time" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.prequeueStartTime"></a>

- *Type:* str

ISO 8601 timestamp that marks when to begin queueing all users before the event starts.

Must occur at least 5 minutes before `event_start_time`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/waiting_room_event#prequeue_start_time WaitingRoomEvent#prequeue_start_time}

---

##### `queueing_method`<sup>Optional</sup> <a name="queueing_method" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.queueingMethod"></a>

- *Type:* str

The queueing method used by the waiting room. Available values: `fifo`, `random`, `passthrough`, `reject`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/waiting_room_event#queueing_method WaitingRoomEvent#queueing_method}

---

##### `session_duration`<sup>Optional</sup> <a name="session_duration" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.sessionDuration"></a>

- *Type:* typing.Union[int, float]

Lifetime of a cookie (in minutes) set by Cloudflare for users who get access to the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/waiting_room_event#session_duration WaitingRoomEvent#session_duration}

---

##### `shuffle_at_event_start`<sup>Optional</sup> <a name="shuffle_at_event_start" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.shuffleAtEventStart"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Users in the prequeue will be shuffled randomly at the `event_start_time`.

Requires that `prequeue_start_time` is not null. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/waiting_room_event#shuffle_at_event_start WaitingRoomEvent#shuffle_at_event_start}

---

##### `suspended`<sup>Optional</sup> <a name="suspended" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.suspended"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If suspended, the event is ignored and traffic will be handled based on the waiting room configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/waiting_room_event#suspended WaitingRoomEvent#suspended}

---

##### `total_active_users`<sup>Optional</sup> <a name="total_active_users" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.Initializer.parameter.totalActiveUsers"></a>

- *Type:* typing.Union[int, float]

The total number of active user sessions on the route at a point in time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/waiting_room_event#total_active_users WaitingRoomEvent#total_active_users}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetCustomPageHtml">reset_custom_page_html</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetDisableSessionRenewal">reset_disable_session_renewal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetNewUsersPerMinute">reset_new_users_per_minute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetPrequeueStartTime">reset_prequeue_start_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetQueueingMethod">reset_queueing_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetSessionDuration">reset_session_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetShuffleAtEventStart">reset_shuffle_at_event_start</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetSuspended">reset_suspended</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetTotalActiveUsers">reset_total_active_users</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_custom_page_html` <a name="reset_custom_page_html" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetCustomPageHtml"></a>

```python
def reset_custom_page_html() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disable_session_renewal` <a name="reset_disable_session_renewal" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetDisableSessionRenewal"></a>

```python
def reset_disable_session_renewal() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_new_users_per_minute` <a name="reset_new_users_per_minute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetNewUsersPerMinute"></a>

```python
def reset_new_users_per_minute() -> None
```

##### `reset_prequeue_start_time` <a name="reset_prequeue_start_time" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetPrequeueStartTime"></a>

```python
def reset_prequeue_start_time() -> None
```

##### `reset_queueing_method` <a name="reset_queueing_method" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetQueueingMethod"></a>

```python
def reset_queueing_method() -> None
```

##### `reset_session_duration` <a name="reset_session_duration" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetSessionDuration"></a>

```python
def reset_session_duration() -> None
```

##### `reset_shuffle_at_event_start` <a name="reset_shuffle_at_event_start" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetShuffleAtEventStart"></a>

```python
def reset_shuffle_at_event_start() -> None
```

##### `reset_suspended` <a name="reset_suspended" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetSuspended"></a>

```python
def reset_suspended() -> None
```

##### `reset_total_active_users` <a name="reset_total_active_users" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.resetTotalActiveUsers"></a>

```python
def reset_total_active_users() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import waiting_room_event

waitingRoomEvent.WaitingRoomEvent.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import waiting_room_event

waitingRoomEvent.WaitingRoomEvent.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import waiting_room_event

waitingRoomEvent.WaitingRoomEvent.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.modifiedOn">modified_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.customPageHtmlInput">custom_page_html_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.disableSessionRenewalInput">disable_session_renewal_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.eventEndTimeInput">event_end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.eventStartTimeInput">event_start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.newUsersPerMinuteInput">new_users_per_minute_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.prequeueStartTimeInput">prequeue_start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.queueingMethodInput">queueing_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.sessionDurationInput">session_duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.shuffleAtEventStartInput">shuffle_at_event_start_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.suspendedInput">suspended_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.totalActiveUsersInput">total_active_users_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.waitingRoomIdInput">waiting_room_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.customPageHtml">custom_page_html</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.disableSessionRenewal">disable_session_renewal</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.eventEndTime">event_end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.eventStartTime">event_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.newUsersPerMinute">new_users_per_minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.prequeueStartTime">prequeue_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.queueingMethod">queueing_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.sessionDuration">session_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.shuffleAtEventStart">shuffle_at_event_start</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.suspended">suspended</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.totalActiveUsers">total_active_users</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.waitingRoomId">waiting_room_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `modified_on`<sup>Required</sup> <a name="modified_on" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.modifiedOn"></a>

```python
modified_on: str
```

- *Type:* str

---

##### `custom_page_html_input`<sup>Optional</sup> <a name="custom_page_html_input" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.customPageHtmlInput"></a>

```python
custom_page_html_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disable_session_renewal_input`<sup>Optional</sup> <a name="disable_session_renewal_input" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.disableSessionRenewalInput"></a>

```python
disable_session_renewal_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `event_end_time_input`<sup>Optional</sup> <a name="event_end_time_input" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.eventEndTimeInput"></a>

```python
event_end_time_input: str
```

- *Type:* str

---

##### `event_start_time_input`<sup>Optional</sup> <a name="event_start_time_input" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.eventStartTimeInput"></a>

```python
event_start_time_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `new_users_per_minute_input`<sup>Optional</sup> <a name="new_users_per_minute_input" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.newUsersPerMinuteInput"></a>

```python
new_users_per_minute_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `prequeue_start_time_input`<sup>Optional</sup> <a name="prequeue_start_time_input" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.prequeueStartTimeInput"></a>

```python
prequeue_start_time_input: str
```

- *Type:* str

---

##### `queueing_method_input`<sup>Optional</sup> <a name="queueing_method_input" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.queueingMethodInput"></a>

```python
queueing_method_input: str
```

- *Type:* str

---

##### `session_duration_input`<sup>Optional</sup> <a name="session_duration_input" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.sessionDurationInput"></a>

```python
session_duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shuffle_at_event_start_input`<sup>Optional</sup> <a name="shuffle_at_event_start_input" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.shuffleAtEventStartInput"></a>

```python
shuffle_at_event_start_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `suspended_input`<sup>Optional</sup> <a name="suspended_input" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.suspendedInput"></a>

```python
suspended_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `total_active_users_input`<sup>Optional</sup> <a name="total_active_users_input" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.totalActiveUsersInput"></a>

```python
total_active_users_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `waiting_room_id_input`<sup>Optional</sup> <a name="waiting_room_id_input" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.waitingRoomIdInput"></a>

```python
waiting_room_id_input: str
```

- *Type:* str

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `custom_page_html`<sup>Required</sup> <a name="custom_page_html" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.customPageHtml"></a>

```python
custom_page_html: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disable_session_renewal`<sup>Required</sup> <a name="disable_session_renewal" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.disableSessionRenewal"></a>

```python
disable_session_renewal: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `event_end_time`<sup>Required</sup> <a name="event_end_time" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.eventEndTime"></a>

```python
event_end_time: str
```

- *Type:* str

---

##### `event_start_time`<sup>Required</sup> <a name="event_start_time" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.eventStartTime"></a>

```python
event_start_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `new_users_per_minute`<sup>Required</sup> <a name="new_users_per_minute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.newUsersPerMinute"></a>

```python
new_users_per_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `prequeue_start_time`<sup>Required</sup> <a name="prequeue_start_time" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.prequeueStartTime"></a>

```python
prequeue_start_time: str
```

- *Type:* str

---

##### `queueing_method`<sup>Required</sup> <a name="queueing_method" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.queueingMethod"></a>

```python
queueing_method: str
```

- *Type:* str

---

##### `session_duration`<sup>Required</sup> <a name="session_duration" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.sessionDuration"></a>

```python
session_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shuffle_at_event_start`<sup>Required</sup> <a name="shuffle_at_event_start" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.shuffleAtEventStart"></a>

```python
shuffle_at_event_start: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `suspended`<sup>Required</sup> <a name="suspended" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.suspended"></a>

```python
suspended: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `total_active_users`<sup>Required</sup> <a name="total_active_users" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.totalActiveUsers"></a>

```python
total_active_users: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `waiting_room_id`<sup>Required</sup> <a name="waiting_room_id" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.waitingRoomId"></a>

```python
waiting_room_id: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEvent.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WaitingRoomEventConfig <a name="WaitingRoomEventConfig" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import waiting_room_event

waitingRoomEvent.WaitingRoomEventConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  event_end_time: str,
  event_start_time: str,
  name: str,
  waiting_room_id: str,
  zone_id: str,
  custom_page_html: str = None,
  description: str = None,
  disable_session_renewal: typing.Union[bool, IResolvable] = None,
  id: str = None,
  new_users_per_minute: typing.Union[int, float] = None,
  prequeue_start_time: str = None,
  queueing_method: str = None,
  session_duration: typing.Union[int, float] = None,
  shuffle_at_event_start: typing.Union[bool, IResolvable] = None,
  suspended: typing.Union[bool, IResolvable] = None,
  total_active_users: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.eventEndTime">event_end_time</a></code> | <code>str</code> | ISO 8601 timestamp that marks the end of the event. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.eventStartTime">event_start_time</a></code> | <code>str</code> | ISO 8601 timestamp that marks the start of the event. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.name">name</a></code> | <code>str</code> | A unique name to identify the event. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.waitingRoomId">waiting_room_id</a></code> | <code>str</code> | The Waiting Room ID the event should apply to. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.zoneId">zone_id</a></code> | <code>str</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.customPageHtml">custom_page_html</a></code> | <code>str</code> | This is a templated html file that will be rendered at the edge. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.description">description</a></code> | <code>str</code> | A description to let users add more details about the event. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.disableSessionRenewal">disable_session_renewal</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disables automatic renewal of session cookies. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/waiting_room_event#id WaitingRoomEvent#id}. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.newUsersPerMinute">new_users_per_minute</a></code> | <code>typing.Union[int, float]</code> | The number of new users that will be let into the route every minute. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.prequeueStartTime">prequeue_start_time</a></code> | <code>str</code> | ISO 8601 timestamp that marks when to begin queueing all users before the event starts. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.queueingMethod">queueing_method</a></code> | <code>str</code> | The queueing method used by the waiting room. Available values: `fifo`, `random`, `passthrough`, `reject`. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.sessionDuration">session_duration</a></code> | <code>typing.Union[int, float]</code> | Lifetime of a cookie (in minutes) set by Cloudflare for users who get access to the origin. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.shuffleAtEventStart">shuffle_at_event_start</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Users in the prequeue will be shuffled randomly at the `event_start_time`. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.suspended">suspended</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If suspended, the event is ignored and traffic will be handled based on the waiting room configuration. |
| <code><a href="#@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.totalActiveUsers">total_active_users</a></code> | <code>typing.Union[int, float]</code> | The total number of active user sessions on the route at a point in time. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `event_end_time`<sup>Required</sup> <a name="event_end_time" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.eventEndTime"></a>

```python
event_end_time: str
```

- *Type:* str

ISO 8601 timestamp that marks the end of the event.

**Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/waiting_room_event#event_end_time WaitingRoomEvent#event_end_time}

---

##### `event_start_time`<sup>Required</sup> <a name="event_start_time" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.eventStartTime"></a>

```python
event_start_time: str
```

- *Type:* str

ISO 8601 timestamp that marks the start of the event.

Must occur at least 1 minute before `event_end_time`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/waiting_room_event#event_start_time WaitingRoomEvent#event_start_time}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A unique name to identify the event.

Only alphanumeric characters, hyphens, and underscores are allowed. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/waiting_room_event#name WaitingRoomEvent#name}

---

##### `waiting_room_id`<sup>Required</sup> <a name="waiting_room_id" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.waitingRoomId"></a>

```python
waiting_room_id: str
```

- *Type:* str

The Waiting Room ID the event should apply to. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/waiting_room_event#waiting_room_id WaitingRoomEvent#waiting_room_id}

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/waiting_room_event#zone_id WaitingRoomEvent#zone_id}

---

##### `custom_page_html`<sup>Optional</sup> <a name="custom_page_html" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.customPageHtml"></a>

```python
custom_page_html: str
```

- *Type:* str

This is a templated html file that will be rendered at the edge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/waiting_room_event#custom_page_html WaitingRoomEvent#custom_page_html}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description to let users add more details about the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/waiting_room_event#description WaitingRoomEvent#description}

---

##### `disable_session_renewal`<sup>Optional</sup> <a name="disable_session_renewal" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.disableSessionRenewal"></a>

```python
disable_session_renewal: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disables automatic renewal of session cookies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/waiting_room_event#disable_session_renewal WaitingRoomEvent#disable_session_renewal}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/waiting_room_event#id WaitingRoomEvent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `new_users_per_minute`<sup>Optional</sup> <a name="new_users_per_minute" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.newUsersPerMinute"></a>

```python
new_users_per_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of new users that will be let into the route every minute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/waiting_room_event#new_users_per_minute WaitingRoomEvent#new_users_per_minute}

---

##### `prequeue_start_time`<sup>Optional</sup> <a name="prequeue_start_time" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.prequeueStartTime"></a>

```python
prequeue_start_time: str
```

- *Type:* str

ISO 8601 timestamp that marks when to begin queueing all users before the event starts.

Must occur at least 5 minutes before `event_start_time`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/waiting_room_event#prequeue_start_time WaitingRoomEvent#prequeue_start_time}

---

##### `queueing_method`<sup>Optional</sup> <a name="queueing_method" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.queueingMethod"></a>

```python
queueing_method: str
```

- *Type:* str

The queueing method used by the waiting room. Available values: `fifo`, `random`, `passthrough`, `reject`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/waiting_room_event#queueing_method WaitingRoomEvent#queueing_method}

---

##### `session_duration`<sup>Optional</sup> <a name="session_duration" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.sessionDuration"></a>

```python
session_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Lifetime of a cookie (in minutes) set by Cloudflare for users who get access to the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/waiting_room_event#session_duration WaitingRoomEvent#session_duration}

---

##### `shuffle_at_event_start`<sup>Optional</sup> <a name="shuffle_at_event_start" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.shuffleAtEventStart"></a>

```python
shuffle_at_event_start: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Users in the prequeue will be shuffled randomly at the `event_start_time`.

Requires that `prequeue_start_time` is not null. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/waiting_room_event#shuffle_at_event_start WaitingRoomEvent#shuffle_at_event_start}

---

##### `suspended`<sup>Optional</sup> <a name="suspended" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.suspended"></a>

```python
suspended: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If suspended, the event is ignored and traffic will be handled based on the waiting room configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/waiting_room_event#suspended WaitingRoomEvent#suspended}

---

##### `total_active_users`<sup>Optional</sup> <a name="total_active_users" id="@cdktf/provider-cloudflare.waitingRoomEvent.WaitingRoomEventConfig.property.totalActiveUsers"></a>

```python
total_active_users: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The total number of active user sessions on the route at a point in time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/waiting_room_event#total_active_users WaitingRoomEvent#total_active_users}

---



