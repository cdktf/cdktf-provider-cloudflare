# `dataCloudflareWaitingRoomEvent` Submodule <a name="`dataCloudflareWaitingRoomEvent` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareWaitingRoomEvent <a name="DataCloudflareWaitingRoomEvent" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/waiting_room_event cloudflare_waiting_room_event}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_waiting_room_event

dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  waiting_room_id: str,
  zone_id: str,
  event_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.waitingRoomId">waiting_room_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/waiting_room_event#waiting_room_id DataCloudflareWaitingRoomEvent#waiting_room_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.eventId">event_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/waiting_room_event#event_id DataCloudflareWaitingRoomEvent#event_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `waiting_room_id`<sup>Required</sup> <a name="waiting_room_id" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.waitingRoomId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/waiting_room_event#waiting_room_id DataCloudflareWaitingRoomEvent#waiting_room_id}.

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.zoneId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/waiting_room_event#zone_id DataCloudflareWaitingRoomEvent#zone_id}

---

##### `event_id`<sup>Optional</sup> <a name="event_id" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.Initializer.parameter.eventId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/waiting_room_event#event_id DataCloudflareWaitingRoomEvent#event_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.resetEventId">reset_event_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_event_id` <a name="reset_event_id" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.resetEventId"></a>

```python
def reset_event_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareWaitingRoomEvent resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_waiting_room_event

dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_waiting_room_event

dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_waiting_room_event

dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_waiting_room_event

dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareWaitingRoomEvent resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareWaitingRoomEvent to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareWaitingRoomEvent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/waiting_room_event#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareWaitingRoomEvent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.customPageHtml">custom_page_html</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.disableSessionRenewal">disable_session_renewal</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.eventEndTime">event_end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.eventStartTime">event_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.modifiedOn">modified_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.newUsersPerMinute">new_users_per_minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.prequeueStartTime">prequeue_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.queueingMethod">queueing_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.sessionDuration">session_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.shuffleAtEventStart">shuffle_at_event_start</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.suspended">suspended</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.totalActiveUsers">total_active_users</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.turnstileAction">turnstile_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.turnstileMode">turnstile_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.eventIdInput">event_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.waitingRoomIdInput">waiting_room_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.eventId">event_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.waitingRoomId">waiting_room_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `custom_page_html`<sup>Required</sup> <a name="custom_page_html" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.customPageHtml"></a>

```python
custom_page_html: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disable_session_renewal`<sup>Required</sup> <a name="disable_session_renewal" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.disableSessionRenewal"></a>

```python
disable_session_renewal: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `event_end_time`<sup>Required</sup> <a name="event_end_time" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.eventEndTime"></a>

```python
event_end_time: str
```

- *Type:* str

---

##### `event_start_time`<sup>Required</sup> <a name="event_start_time" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.eventStartTime"></a>

```python
event_start_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `modified_on`<sup>Required</sup> <a name="modified_on" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.modifiedOn"></a>

```python
modified_on: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `new_users_per_minute`<sup>Required</sup> <a name="new_users_per_minute" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.newUsersPerMinute"></a>

```python
new_users_per_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `prequeue_start_time`<sup>Required</sup> <a name="prequeue_start_time" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.prequeueStartTime"></a>

```python
prequeue_start_time: str
```

- *Type:* str

---

##### `queueing_method`<sup>Required</sup> <a name="queueing_method" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.queueingMethod"></a>

```python
queueing_method: str
```

- *Type:* str

---

##### `session_duration`<sup>Required</sup> <a name="session_duration" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.sessionDuration"></a>

```python
session_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shuffle_at_event_start`<sup>Required</sup> <a name="shuffle_at_event_start" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.shuffleAtEventStart"></a>

```python
shuffle_at_event_start: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `suspended`<sup>Required</sup> <a name="suspended" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.suspended"></a>

```python
suspended: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `total_active_users`<sup>Required</sup> <a name="total_active_users" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.totalActiveUsers"></a>

```python
total_active_users: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `turnstile_action`<sup>Required</sup> <a name="turnstile_action" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.turnstileAction"></a>

```python
turnstile_action: str
```

- *Type:* str

---

##### `turnstile_mode`<sup>Required</sup> <a name="turnstile_mode" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.turnstileMode"></a>

```python
turnstile_mode: str
```

- *Type:* str

---

##### `event_id_input`<sup>Optional</sup> <a name="event_id_input" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.eventIdInput"></a>

```python
event_id_input: str
```

- *Type:* str

---

##### `waiting_room_id_input`<sup>Optional</sup> <a name="waiting_room_id_input" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.waitingRoomIdInput"></a>

```python
waiting_room_id_input: str
```

- *Type:* str

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `event_id`<sup>Required</sup> <a name="event_id" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.eventId"></a>

```python
event_id: str
```

- *Type:* str

---

##### `waiting_room_id`<sup>Required</sup> <a name="waiting_room_id" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.waitingRoomId"></a>

```python
waiting_room_id: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEvent.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareWaitingRoomEventConfig <a name="DataCloudflareWaitingRoomEventConfig" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_waiting_room_event

dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  waiting_room_id: str,
  zone_id: str,
  event_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.waitingRoomId">waiting_room_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/waiting_room_event#waiting_room_id DataCloudflareWaitingRoomEvent#waiting_room_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.zoneId">zone_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.eventId">event_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/waiting_room_event#event_id DataCloudflareWaitingRoomEvent#event_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `waiting_room_id`<sup>Required</sup> <a name="waiting_room_id" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.waitingRoomId"></a>

```python
waiting_room_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/waiting_room_event#waiting_room_id DataCloudflareWaitingRoomEvent#waiting_room_id}.

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/waiting_room_event#zone_id DataCloudflareWaitingRoomEvent#zone_id}

---

##### `event_id`<sup>Optional</sup> <a name="event_id" id="@cdktf/provider-cloudflare.dataCloudflareWaitingRoomEvent.DataCloudflareWaitingRoomEventConfig.property.eventId"></a>

```python
event_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/waiting_room_event#event_id DataCloudflareWaitingRoomEvent#event_id}.

---



