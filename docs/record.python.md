# `cloudflare_record`

Refer to the Terraform Registory for docs: [`cloudflare_record`](https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record).

# `record` Submodule <a name="`record` Submodule" id="@cdktf/provider-cloudflare.record"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Record <a name="Record" id="@cdktf/provider-cloudflare.record.Record"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record cloudflare_record}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.record.Record.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import record

record.Record(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  type: str,
  zone_id: str,
  allow_overwrite: typing.Union[bool, IResolvable] = None,
  comment: str = None,
  data: RecordData = None,
  id: str = None,
  priority: typing.Union[int, float] = None,
  proxied: typing.Union[bool, IResolvable] = None,
  tags: typing.List[str] = None,
  timeouts: RecordTimeouts = None,
  ttl: typing.Union[int, float] = None,
  value: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the record. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of the record. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.allowOverwrite">allow_overwrite</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow creation of this record in Terraform to overwrite an existing record, if any. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Comments or notes about the DNS record. This field has no effect on DNS responses. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.data">data</a></code> | <code><a href="#@cdktf/provider-cloudflare.record.RecordData">RecordData</a></code> | data block. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#id Record#id}. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | The priority of the record. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.proxied">proxied</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the record gets Cloudflare's origin protection. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Custom tags for the DNS record. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeouts">RecordTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | The TTL of the record. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.Initializer.parameter.value">value</a></code> | <code>str</code> | The value of the record. Conflicts with `data`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.name"></a>

- *Type:* str

The name of the record. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#name Record#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.type"></a>

- *Type:* str

The type of the record.

Available values: `A`, `AAAA`, `CAA`, `CNAME`, `TXT`, `SRV`, `LOC`, `MX`, `NS`, `SPF`, `CERT`, `DNSKEY`, `DS`, `NAPTR`, `SMIMEA`, `SSHFP`, `TLSA`, `URI`, `PTR`, `HTTPS`, `SVCB`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#type Record#type}

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.zoneId"></a>

- *Type:* str

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#zone_id Record#zone_id}

---

##### `allow_overwrite`<sup>Optional</sup> <a name="allow_overwrite" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.allowOverwrite"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow creation of this record in Terraform to overwrite an existing record, if any.

This does not affect the ability to update the record in Terraform and does not prevent other resources within Terraform or manual changes outside Terraform from overwriting this record. **This configuration is not recommended for most environments**. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#allow_overwrite Record#allow_overwrite}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.comment"></a>

- *Type:* str

Comments or notes about the DNS record. This field has no effect on DNS responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#comment Record#comment}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.data"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.record.RecordData">RecordData</a>

data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#data Record#data}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#id Record#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

The priority of the record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#priority Record#priority}

---

##### `proxied`<sup>Optional</sup> <a name="proxied" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.proxied"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the record gets Cloudflare's origin protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#proxied Record#proxied}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Custom tags for the DNS record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#tags Record#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.record.RecordTimeouts">RecordTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#timeouts Record#timeouts}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.ttl"></a>

- *Type:* typing.Union[int, float]

The TTL of the record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#ttl Record#ttl}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-cloudflare.record.Record.Initializer.parameter.value"></a>

- *Type:* str

The value of the record. Conflicts with `data`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#value Record#value}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.putData">put_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetAllowOverwrite">reset_allow_overwrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetData">reset_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetProxied">reset_proxied</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetTtl">reset_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.resetValue">reset_value</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.record.Record.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.record.Record.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.record.Record.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.record.Record.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.record.Record.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.record.Record.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.record.Record.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.record.Record.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.record.Record.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.record.Record.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.record.Record.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.record.Record.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.record.Record.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.record.Record.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.record.Record.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.record.Record.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.record.Record.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.record.Record.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.record.Record.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.record.Record.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.record.Record.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.record.Record.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.record.Record.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.record.Record.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.record.Record.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.record.Record.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.record.Record.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.record.Record.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.record.Record.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.record.Record.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.record.Record.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.record.Record.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.record.Record.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.record.Record.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.record.Record.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.record.Record.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.record.Record.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_data` <a name="put_data" id="@cdktf/provider-cloudflare.record.Record.putData"></a>

```python
def put_data(
  algorithm: typing.Union[int, float] = None,
  altitude: typing.Union[int, float] = None,
  certificate: str = None,
  content: str = None,
  digest: str = None,
  digest_type: typing.Union[int, float] = None,
  fingerprint: str = None,
  flags: str = None,
  key_tag: typing.Union[int, float] = None,
  lat_degrees: typing.Union[int, float] = None,
  lat_direction: str = None,
  lat_minutes: typing.Union[int, float] = None,
  lat_seconds: typing.Union[int, float] = None,
  long_degrees: typing.Union[int, float] = None,
  long_direction: str = None,
  long_minutes: typing.Union[int, float] = None,
  long_seconds: typing.Union[int, float] = None,
  matching_type: typing.Union[int, float] = None,
  name: str = None,
  order: typing.Union[int, float] = None,
  port: typing.Union[int, float] = None,
  precision_horz: typing.Union[int, float] = None,
  precision_vert: typing.Union[int, float] = None,
  preference: typing.Union[int, float] = None,
  priority: typing.Union[int, float] = None,
  proto: str = None,
  protocol: typing.Union[int, float] = None,
  public_key: str = None,
  regex: str = None,
  replacement: str = None,
  selector: typing.Union[int, float] = None,
  service: str = None,
  size: typing.Union[int, float] = None,
  tag: str = None,
  target: str = None,
  type: typing.Union[int, float] = None,
  usage: typing.Union[int, float] = None,
  value: str = None,
  weight: typing.Union[int, float] = None
) -> None
```

###### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktf/provider-cloudflare.record.Record.putData.parameter.algorithm"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#algorithm Record#algorithm}.

---

###### `altitude`<sup>Optional</sup> <a name="altitude" id="@cdktf/provider-cloudflare.record.Record.putData.parameter.altitude"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#altitude Record#altitude}.

---

###### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-cloudflare.record.Record.putData.parameter.certificate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#certificate Record#certificate}.

---

###### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-cloudflare.record.Record.putData.parameter.content"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#content Record#content}.

---

###### `digest`<sup>Optional</sup> <a name="digest" id="@cdktf/provider-cloudflare.record.Record.putData.parameter.digest"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#digest Record#digest}.

---

###### `digest_type`<sup>Optional</sup> <a name="digest_type" id="@cdktf/provider-cloudflare.record.Record.putData.parameter.digestType"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#digest_type Record#digest_type}.

---

###### `fingerprint`<sup>Optional</sup> <a name="fingerprint" id="@cdktf/provider-cloudflare.record.Record.putData.parameter.fingerprint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#fingerprint Record#fingerprint}.

---

###### `flags`<sup>Optional</sup> <a name="flags" id="@cdktf/provider-cloudflare.record.Record.putData.parameter.flags"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#flags Record#flags}.

---

###### `key_tag`<sup>Optional</sup> <a name="key_tag" id="@cdktf/provider-cloudflare.record.Record.putData.parameter.keyTag"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#key_tag Record#key_tag}.

---

###### `lat_degrees`<sup>Optional</sup> <a name="lat_degrees" id="@cdktf/provider-cloudflare.record.Record.putData.parameter.latDegrees"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#lat_degrees Record#lat_degrees}.

---

###### `lat_direction`<sup>Optional</sup> <a name="lat_direction" id="@cdktf/provider-cloudflare.record.Record.putData.parameter.latDirection"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#lat_direction Record#lat_direction}.

---

###### `lat_minutes`<sup>Optional</sup> <a name="lat_minutes" id="@cdktf/provider-cloudflare.record.Record.putData.parameter.latMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#lat_minutes Record#lat_minutes}.

---

###### `lat_seconds`<sup>Optional</sup> <a name="lat_seconds" id="@cdktf/provider-cloudflare.record.Record.putData.parameter.latSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#lat_seconds Record#lat_seconds}.

---

###### `long_degrees`<sup>Optional</sup> <a name="long_degrees" id="@cdktf/provider-cloudflare.record.Record.putData.parameter.longDegrees"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#long_degrees Record#long_degrees}.

---

###### `long_direction`<sup>Optional</sup> <a name="long_direction" id="@cdktf/provider-cloudflare.record.Record.putData.parameter.longDirection"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#long_direction Record#long_direction}.

---

###### `long_minutes`<sup>Optional</sup> <a name="long_minutes" id="@cdktf/provider-cloudflare.record.Record.putData.parameter.longMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#long_minutes Record#long_minutes}.

---

###### `long_seconds`<sup>Optional</sup> <a name="long_seconds" id="@cdktf/provider-cloudflare.record.Record.putData.parameter.longSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#long_seconds Record#long_seconds}.

---

###### `matching_type`<sup>Optional</sup> <a name="matching_type" id="@cdktf/provider-cloudflare.record.Record.putData.parameter.matchingType"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#matching_type Record#matching_type}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.record.Record.putData.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#name Record#name}.

---

###### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-cloudflare.record.Record.putData.parameter.order"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#order Record#order}.

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-cloudflare.record.Record.putData.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#port Record#port}.

---

###### `precision_horz`<sup>Optional</sup> <a name="precision_horz" id="@cdktf/provider-cloudflare.record.Record.putData.parameter.precisionHorz"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#precision_horz Record#precision_horz}.

---

###### `precision_vert`<sup>Optional</sup> <a name="precision_vert" id="@cdktf/provider-cloudflare.record.Record.putData.parameter.precisionVert"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#precision_vert Record#precision_vert}.

---

###### `preference`<sup>Optional</sup> <a name="preference" id="@cdktf/provider-cloudflare.record.Record.putData.parameter.preference"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#preference Record#preference}.

---

###### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-cloudflare.record.Record.putData.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#priority Record#priority}.

---

###### `proto`<sup>Optional</sup> <a name="proto" id="@cdktf/provider-cloudflare.record.Record.putData.parameter.proto"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#proto Record#proto}.

---

###### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-cloudflare.record.Record.putData.parameter.protocol"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#protocol Record#protocol}.

---

###### `public_key`<sup>Optional</sup> <a name="public_key" id="@cdktf/provider-cloudflare.record.Record.putData.parameter.publicKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#public_key Record#public_key}.

---

###### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-cloudflare.record.Record.putData.parameter.regex"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#regex Record#regex}.

---

###### `replacement`<sup>Optional</sup> <a name="replacement" id="@cdktf/provider-cloudflare.record.Record.putData.parameter.replacement"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#replacement Record#replacement}.

---

###### `selector`<sup>Optional</sup> <a name="selector" id="@cdktf/provider-cloudflare.record.Record.putData.parameter.selector"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#selector Record#selector}.

---

###### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-cloudflare.record.Record.putData.parameter.service"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#service Record#service}.

---

###### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-cloudflare.record.Record.putData.parameter.size"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#size Record#size}.

---

###### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-cloudflare.record.Record.putData.parameter.tag"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#tag Record#tag}.

---

###### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-cloudflare.record.Record.putData.parameter.target"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#target Record#target}.

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.record.Record.putData.parameter.type"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#type Record#type}.

---

###### `usage`<sup>Optional</sup> <a name="usage" id="@cdktf/provider-cloudflare.record.Record.putData.parameter.usage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#usage Record#usage}.

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-cloudflare.record.Record.putData.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#value Record#value}.

---

###### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-cloudflare.record.Record.putData.parameter.weight"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#weight Record#weight}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-cloudflare.record.Record.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-cloudflare.record.Record.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#create Record#create}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-cloudflare.record.Record.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#update Record#update}.

---

##### `reset_allow_overwrite` <a name="reset_allow_overwrite" id="@cdktf/provider-cloudflare.record.Record.resetAllowOverwrite"></a>

```python
def reset_allow_overwrite() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-cloudflare.record.Record.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_data` <a name="reset_data" id="@cdktf/provider-cloudflare.record.Record.resetData"></a>

```python
def reset_data() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.record.Record.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-cloudflare.record.Record.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_proxied` <a name="reset_proxied" id="@cdktf/provider-cloudflare.record.Record.resetProxied"></a>

```python
def reset_proxied() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-cloudflare.record.Record.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-cloudflare.record.Record.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktf/provider-cloudflare.record.Record.resetTtl"></a>

```python
def reset_ttl() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-cloudflare.record.Record.resetValue"></a>

```python
def reset_value() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Record resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.record.Record.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import record

record.Record.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.record.Record.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.record.Record.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import record

record.Record.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.record.Record.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.record.Record.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import record

record.Record.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.record.Record.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.record.Record.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import record

record.Record.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Record resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.record.Record.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.record.Record.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Record to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.record.Record.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Record that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.record.Record.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Record to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.data">data</a></code> | <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference">RecordDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.metadata">metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.modifiedOn">modified_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.proxiable">proxiable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference">RecordTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.allowOverwriteInput">allow_overwrite_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.dataInput">data_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.record.RecordData">RecordData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.proxiedInput">proxied_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.record.RecordTimeouts">RecordTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.ttlInput">ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.allowOverwrite">allow_overwrite</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.proxied">proxied</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.record.Record.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.record.Record.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.record.Record.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.record.Record.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.record.Record.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.record.Record.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.record.Record.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.record.Record.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.record.Record.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.record.Record.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.record.Record.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.record.Record.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.record.Record.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.record.Record.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-cloudflare.record.Record.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-cloudflare.record.Record.property.data"></a>

```python
data: RecordDataOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference">RecordDataOutputReference</a>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.record.Record.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-cloudflare.record.Record.property.metadata"></a>

```python
metadata: StringMap
```

- *Type:* cdktf.StringMap

---

##### `modified_on`<sup>Required</sup> <a name="modified_on" id="@cdktf/provider-cloudflare.record.Record.property.modifiedOn"></a>

```python
modified_on: str
```

- *Type:* str

---

##### `proxiable`<sup>Required</sup> <a name="proxiable" id="@cdktf/provider-cloudflare.record.Record.property.proxiable"></a>

```python
proxiable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-cloudflare.record.Record.property.timeouts"></a>

```python
timeouts: RecordTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference">RecordTimeoutsOutputReference</a>

---

##### `allow_overwrite_input`<sup>Optional</sup> <a name="allow_overwrite_input" id="@cdktf/provider-cloudflare.record.Record.property.allowOverwriteInput"></a>

```python
allow_overwrite_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-cloudflare.record.Record.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `data_input`<sup>Optional</sup> <a name="data_input" id="@cdktf/provider-cloudflare.record.Record.property.dataInput"></a>

```python
data_input: RecordData
```

- *Type:* <a href="#@cdktf/provider-cloudflare.record.RecordData">RecordData</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.record.Record.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.record.Record.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-cloudflare.record.Record.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `proxied_input`<sup>Optional</sup> <a name="proxied_input" id="@cdktf/provider-cloudflare.record.Record.property.proxiedInput"></a>

```python
proxied_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-cloudflare.record.Record.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-cloudflare.record.Record.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, RecordTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.record.RecordTimeouts">RecordTimeouts</a>]

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-cloudflare.record.Record.property.ttlInput"></a>

```python
ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-cloudflare.record.Record.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-cloudflare.record.Record.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.record.Record.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `allow_overwrite`<sup>Required</sup> <a name="allow_overwrite" id="@cdktf/provider-cloudflare.record.Record.property.allowOverwrite"></a>

```python
allow_overwrite: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-cloudflare.record.Record.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.record.Record.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.record.Record.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.record.Record.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `proxied`<sup>Required</sup> <a name="proxied" id="@cdktf/provider-cloudflare.record.Record.property.proxied"></a>

```python
proxied: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-cloudflare.record.Record.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-cloudflare.record.Record.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.record.Record.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.record.Record.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.record.Record.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.Record.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.record.Record.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RecordConfig <a name="RecordConfig" id="@cdktf/provider-cloudflare.record.RecordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.record.RecordConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import record

record.RecordConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  type: str,
  zone_id: str,
  allow_overwrite: typing.Union[bool, IResolvable] = None,
  comment: str = None,
  data: RecordData = None,
  id: str = None,
  priority: typing.Union[int, float] = None,
  proxied: typing.Union[bool, IResolvable] = None,
  tags: typing.List[str] = None,
  timeouts: RecordTimeouts = None,
  ttl: typing.Union[int, float] = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.name">name</a></code> | <code>str</code> | The name of the record. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.type">type</a></code> | <code>str</code> | The type of the record. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.zoneId">zone_id</a></code> | <code>str</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.allowOverwrite">allow_overwrite</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow creation of this record in Terraform to overwrite an existing record, if any. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.comment">comment</a></code> | <code>str</code> | Comments or notes about the DNS record. This field has no effect on DNS responses. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.data">data</a></code> | <code><a href="#@cdktf/provider-cloudflare.record.RecordData">RecordData</a></code> | data block. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#id Record#id}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | The priority of the record. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.proxied">proxied</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the record gets Cloudflare's origin protection. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | Custom tags for the DNS record. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeouts">RecordTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | The TTL of the record. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordConfig.property.value">value</a></code> | <code>str</code> | The value of the record. Conflicts with `data`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.record.RecordConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.record.RecordConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.record.RecordConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.record.RecordConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.record.RecordConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.record.RecordConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.record.RecordConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.record.RecordConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the record. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#name Record#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.record.RecordConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the record.

Available values: `A`, `AAAA`, `CAA`, `CNAME`, `TXT`, `SRV`, `LOC`, `MX`, `NS`, `SPF`, `CERT`, `DNSKEY`, `DS`, `NAPTR`, `SMIMEA`, `SSHFP`, `TLSA`, `URI`, `PTR`, `HTTPS`, `SVCB`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#type Record#type}

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.record.RecordConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#zone_id Record#zone_id}

---

##### `allow_overwrite`<sup>Optional</sup> <a name="allow_overwrite" id="@cdktf/provider-cloudflare.record.RecordConfig.property.allowOverwrite"></a>

```python
allow_overwrite: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow creation of this record in Terraform to overwrite an existing record, if any.

This does not affect the ability to update the record in Terraform and does not prevent other resources within Terraform or manual changes outside Terraform from overwriting this record. **This configuration is not recommended for most environments**. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#allow_overwrite Record#allow_overwrite}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-cloudflare.record.RecordConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Comments or notes about the DNS record. This field has no effect on DNS responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#comment Record#comment}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-cloudflare.record.RecordConfig.property.data"></a>

```python
data: RecordData
```

- *Type:* <a href="#@cdktf/provider-cloudflare.record.RecordData">RecordData</a>

data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#data Record#data}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.record.RecordConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#id Record#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-cloudflare.record.RecordConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The priority of the record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#priority Record#priority}

---

##### `proxied`<sup>Optional</sup> <a name="proxied" id="@cdktf/provider-cloudflare.record.RecordConfig.property.proxied"></a>

```python
proxied: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the record gets Cloudflare's origin protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#proxied Record#proxied}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-cloudflare.record.RecordConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Custom tags for the DNS record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#tags Record#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-cloudflare.record.RecordConfig.property.timeouts"></a>

```python
timeouts: RecordTimeouts
```

- *Type:* <a href="#@cdktf/provider-cloudflare.record.RecordTimeouts">RecordTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#timeouts Record#timeouts}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-cloudflare.record.RecordConfig.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The TTL of the record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#ttl Record#ttl}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-cloudflare.record.RecordConfig.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the record. Conflicts with `data`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#value Record#value}

---

### RecordData <a name="RecordData" id="@cdktf/provider-cloudflare.record.RecordData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.record.RecordData.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import record

record.RecordData(
  algorithm: typing.Union[int, float] = None,
  altitude: typing.Union[int, float] = None,
  certificate: str = None,
  content: str = None,
  digest: str = None,
  digest_type: typing.Union[int, float] = None,
  fingerprint: str = None,
  flags: str = None,
  key_tag: typing.Union[int, float] = None,
  lat_degrees: typing.Union[int, float] = None,
  lat_direction: str = None,
  lat_minutes: typing.Union[int, float] = None,
  lat_seconds: typing.Union[int, float] = None,
  long_degrees: typing.Union[int, float] = None,
  long_direction: str = None,
  long_minutes: typing.Union[int, float] = None,
  long_seconds: typing.Union[int, float] = None,
  matching_type: typing.Union[int, float] = None,
  name: str = None,
  order: typing.Union[int, float] = None,
  port: typing.Union[int, float] = None,
  precision_horz: typing.Union[int, float] = None,
  precision_vert: typing.Union[int, float] = None,
  preference: typing.Union[int, float] = None,
  priority: typing.Union[int, float] = None,
  proto: str = None,
  protocol: typing.Union[int, float] = None,
  public_key: str = None,
  regex: str = None,
  replacement: str = None,
  selector: typing.Union[int, float] = None,
  service: str = None,
  size: typing.Union[int, float] = None,
  tag: str = None,
  target: str = None,
  type: typing.Union[int, float] = None,
  usage: typing.Union[int, float] = None,
  value: str = None,
  weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.algorithm">algorithm</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#algorithm Record#algorithm}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.altitude">altitude</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#altitude Record#altitude}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.certificate">certificate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#certificate Record#certificate}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#content Record#content}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.digest">digest</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#digest Record#digest}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.digestType">digest_type</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#digest_type Record#digest_type}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.fingerprint">fingerprint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#fingerprint Record#fingerprint}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.flags">flags</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#flags Record#flags}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.keyTag">key_tag</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#key_tag Record#key_tag}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.latDegrees">lat_degrees</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#lat_degrees Record#lat_degrees}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.latDirection">lat_direction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#lat_direction Record#lat_direction}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.latMinutes">lat_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#lat_minutes Record#lat_minutes}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.latSeconds">lat_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#lat_seconds Record#lat_seconds}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.longDegrees">long_degrees</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#long_degrees Record#long_degrees}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.longDirection">long_direction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#long_direction Record#long_direction}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.longMinutes">long_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#long_minutes Record#long_minutes}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.longSeconds">long_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#long_seconds Record#long_seconds}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.matchingType">matching_type</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#matching_type Record#matching_type}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#name Record#name}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.order">order</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#order Record#order}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#port Record#port}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.precisionHorz">precision_horz</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#precision_horz Record#precision_horz}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.precisionVert">precision_vert</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#precision_vert Record#precision_vert}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.preference">preference</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#preference Record#preference}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#priority Record#priority}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.proto">proto</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#proto Record#proto}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.protocol">protocol</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#protocol Record#protocol}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.publicKey">public_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#public_key Record#public_key}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.regex">regex</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#regex Record#regex}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.replacement">replacement</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#replacement Record#replacement}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.selector">selector</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#selector Record#selector}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.service">service</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#service Record#service}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.size">size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#size Record#size}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.tag">tag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#tag Record#tag}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.target">target</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#target Record#target}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.type">type</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#type Record#type}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.usage">usage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#usage Record#usage}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#value Record#value}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordData.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#weight Record#weight}. |

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktf/provider-cloudflare.record.RecordData.property.algorithm"></a>

```python
algorithm: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#algorithm Record#algorithm}.

---

##### `altitude`<sup>Optional</sup> <a name="altitude" id="@cdktf/provider-cloudflare.record.RecordData.property.altitude"></a>

```python
altitude: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#altitude Record#altitude}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-cloudflare.record.RecordData.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#certificate Record#certificate}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-cloudflare.record.RecordData.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#content Record#content}.

---

##### `digest`<sup>Optional</sup> <a name="digest" id="@cdktf/provider-cloudflare.record.RecordData.property.digest"></a>

```python
digest: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#digest Record#digest}.

---

##### `digest_type`<sup>Optional</sup> <a name="digest_type" id="@cdktf/provider-cloudflare.record.RecordData.property.digestType"></a>

```python
digest_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#digest_type Record#digest_type}.

---

##### `fingerprint`<sup>Optional</sup> <a name="fingerprint" id="@cdktf/provider-cloudflare.record.RecordData.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#fingerprint Record#fingerprint}.

---

##### `flags`<sup>Optional</sup> <a name="flags" id="@cdktf/provider-cloudflare.record.RecordData.property.flags"></a>

```python
flags: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#flags Record#flags}.

---

##### `key_tag`<sup>Optional</sup> <a name="key_tag" id="@cdktf/provider-cloudflare.record.RecordData.property.keyTag"></a>

```python
key_tag: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#key_tag Record#key_tag}.

---

##### `lat_degrees`<sup>Optional</sup> <a name="lat_degrees" id="@cdktf/provider-cloudflare.record.RecordData.property.latDegrees"></a>

```python
lat_degrees: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#lat_degrees Record#lat_degrees}.

---

##### `lat_direction`<sup>Optional</sup> <a name="lat_direction" id="@cdktf/provider-cloudflare.record.RecordData.property.latDirection"></a>

```python
lat_direction: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#lat_direction Record#lat_direction}.

---

##### `lat_minutes`<sup>Optional</sup> <a name="lat_minutes" id="@cdktf/provider-cloudflare.record.RecordData.property.latMinutes"></a>

```python
lat_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#lat_minutes Record#lat_minutes}.

---

##### `lat_seconds`<sup>Optional</sup> <a name="lat_seconds" id="@cdktf/provider-cloudflare.record.RecordData.property.latSeconds"></a>

```python
lat_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#lat_seconds Record#lat_seconds}.

---

##### `long_degrees`<sup>Optional</sup> <a name="long_degrees" id="@cdktf/provider-cloudflare.record.RecordData.property.longDegrees"></a>

```python
long_degrees: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#long_degrees Record#long_degrees}.

---

##### `long_direction`<sup>Optional</sup> <a name="long_direction" id="@cdktf/provider-cloudflare.record.RecordData.property.longDirection"></a>

```python
long_direction: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#long_direction Record#long_direction}.

---

##### `long_minutes`<sup>Optional</sup> <a name="long_minutes" id="@cdktf/provider-cloudflare.record.RecordData.property.longMinutes"></a>

```python
long_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#long_minutes Record#long_minutes}.

---

##### `long_seconds`<sup>Optional</sup> <a name="long_seconds" id="@cdktf/provider-cloudflare.record.RecordData.property.longSeconds"></a>

```python
long_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#long_seconds Record#long_seconds}.

---

##### `matching_type`<sup>Optional</sup> <a name="matching_type" id="@cdktf/provider-cloudflare.record.RecordData.property.matchingType"></a>

```python
matching_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#matching_type Record#matching_type}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.record.RecordData.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#name Record#name}.

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-cloudflare.record.RecordData.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#order Record#order}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-cloudflare.record.RecordData.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#port Record#port}.

---

##### `precision_horz`<sup>Optional</sup> <a name="precision_horz" id="@cdktf/provider-cloudflare.record.RecordData.property.precisionHorz"></a>

```python
precision_horz: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#precision_horz Record#precision_horz}.

---

##### `precision_vert`<sup>Optional</sup> <a name="precision_vert" id="@cdktf/provider-cloudflare.record.RecordData.property.precisionVert"></a>

```python
precision_vert: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#precision_vert Record#precision_vert}.

---

##### `preference`<sup>Optional</sup> <a name="preference" id="@cdktf/provider-cloudflare.record.RecordData.property.preference"></a>

```python
preference: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#preference Record#preference}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-cloudflare.record.RecordData.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#priority Record#priority}.

---

##### `proto`<sup>Optional</sup> <a name="proto" id="@cdktf/provider-cloudflare.record.RecordData.property.proto"></a>

```python
proto: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#proto Record#proto}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-cloudflare.record.RecordData.property.protocol"></a>

```python
protocol: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#protocol Record#protocol}.

---

##### `public_key`<sup>Optional</sup> <a name="public_key" id="@cdktf/provider-cloudflare.record.RecordData.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#public_key Record#public_key}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-cloudflare.record.RecordData.property.regex"></a>

```python
regex: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#regex Record#regex}.

---

##### `replacement`<sup>Optional</sup> <a name="replacement" id="@cdktf/provider-cloudflare.record.RecordData.property.replacement"></a>

```python
replacement: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#replacement Record#replacement}.

---

##### `selector`<sup>Optional</sup> <a name="selector" id="@cdktf/provider-cloudflare.record.RecordData.property.selector"></a>

```python
selector: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#selector Record#selector}.

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-cloudflare.record.RecordData.property.service"></a>

```python
service: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#service Record#service}.

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-cloudflare.record.RecordData.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#size Record#size}.

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-cloudflare.record.RecordData.property.tag"></a>

```python
tag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#tag Record#tag}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-cloudflare.record.RecordData.property.target"></a>

```python
target: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#target Record#target}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.record.RecordData.property.type"></a>

```python
type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#type Record#type}.

---

##### `usage`<sup>Optional</sup> <a name="usage" id="@cdktf/provider-cloudflare.record.RecordData.property.usage"></a>

```python
usage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#usage Record#usage}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-cloudflare.record.RecordData.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#value Record#value}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-cloudflare.record.RecordData.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#weight Record#weight}.

---

### RecordTimeouts <a name="RecordTimeouts" id="@cdktf/provider-cloudflare.record.RecordTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.record.RecordTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import record

record.RecordTimeouts(
  create: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#create Record#create}. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#update Record#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-cloudflare.record.RecordTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#create Record#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-cloudflare.record.RecordTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/record#update Record#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RecordDataOutputReference <a name="RecordDataOutputReference" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import record

record.RecordDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetAlgorithm">reset_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetAltitude">reset_altitude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetCertificate">reset_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetContent">reset_content</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetDigest">reset_digest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetDigestType">reset_digest_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetFingerprint">reset_fingerprint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetFlags">reset_flags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetKeyTag">reset_key_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLatDegrees">reset_lat_degrees</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLatDirection">reset_lat_direction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLatMinutes">reset_lat_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLatSeconds">reset_lat_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLongDegrees">reset_long_degrees</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLongDirection">reset_long_direction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLongMinutes">reset_long_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLongSeconds">reset_long_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetMatchingType">reset_matching_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetOrder">reset_order</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPrecisionHorz">reset_precision_horz</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPrecisionVert">reset_precision_vert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPreference">reset_preference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetProto">reset_proto</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPublicKey">reset_public_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetRegex">reset_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetReplacement">reset_replacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetSelector">reset_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetService">reset_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetSize">reset_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetTag">reset_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetTarget">reset_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetUsage">reset_usage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetValue">reset_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetWeight">reset_weight</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_algorithm` <a name="reset_algorithm" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetAlgorithm"></a>

```python
def reset_algorithm() -> None
```

##### `reset_altitude` <a name="reset_altitude" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetAltitude"></a>

```python
def reset_altitude() -> None
```

##### `reset_certificate` <a name="reset_certificate" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetCertificate"></a>

```python
def reset_certificate() -> None
```

##### `reset_content` <a name="reset_content" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetContent"></a>

```python
def reset_content() -> None
```

##### `reset_digest` <a name="reset_digest" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetDigest"></a>

```python
def reset_digest() -> None
```

##### `reset_digest_type` <a name="reset_digest_type" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetDigestType"></a>

```python
def reset_digest_type() -> None
```

##### `reset_fingerprint` <a name="reset_fingerprint" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetFingerprint"></a>

```python
def reset_fingerprint() -> None
```

##### `reset_flags` <a name="reset_flags" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetFlags"></a>

```python
def reset_flags() -> None
```

##### `reset_key_tag` <a name="reset_key_tag" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetKeyTag"></a>

```python
def reset_key_tag() -> None
```

##### `reset_lat_degrees` <a name="reset_lat_degrees" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLatDegrees"></a>

```python
def reset_lat_degrees() -> None
```

##### `reset_lat_direction` <a name="reset_lat_direction" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLatDirection"></a>

```python
def reset_lat_direction() -> None
```

##### `reset_lat_minutes` <a name="reset_lat_minutes" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLatMinutes"></a>

```python
def reset_lat_minutes() -> None
```

##### `reset_lat_seconds` <a name="reset_lat_seconds" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLatSeconds"></a>

```python
def reset_lat_seconds() -> None
```

##### `reset_long_degrees` <a name="reset_long_degrees" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLongDegrees"></a>

```python
def reset_long_degrees() -> None
```

##### `reset_long_direction` <a name="reset_long_direction" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLongDirection"></a>

```python
def reset_long_direction() -> None
```

##### `reset_long_minutes` <a name="reset_long_minutes" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLongMinutes"></a>

```python
def reset_long_minutes() -> None
```

##### `reset_long_seconds` <a name="reset_long_seconds" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetLongSeconds"></a>

```python
def reset_long_seconds() -> None
```

##### `reset_matching_type` <a name="reset_matching_type" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetMatchingType"></a>

```python
def reset_matching_type() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_order` <a name="reset_order" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetOrder"></a>

```python
def reset_order() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_precision_horz` <a name="reset_precision_horz" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPrecisionHorz"></a>

```python
def reset_precision_horz() -> None
```

##### `reset_precision_vert` <a name="reset_precision_vert" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPrecisionVert"></a>

```python
def reset_precision_vert() -> None
```

##### `reset_preference` <a name="reset_preference" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPreference"></a>

```python
def reset_preference() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_proto` <a name="reset_proto" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetProto"></a>

```python
def reset_proto() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_public_key` <a name="reset_public_key" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetPublicKey"></a>

```python
def reset_public_key() -> None
```

##### `reset_regex` <a name="reset_regex" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```

##### `reset_replacement` <a name="reset_replacement" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetReplacement"></a>

```python
def reset_replacement() -> None
```

##### `reset_selector` <a name="reset_selector" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetSelector"></a>

```python
def reset_selector() -> None
```

##### `reset_service` <a name="reset_service" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetService"></a>

```python
def reset_service() -> None
```

##### `reset_size` <a name="reset_size" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetSize"></a>

```python
def reset_size() -> None
```

##### `reset_tag` <a name="reset_tag" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetTag"></a>

```python
def reset_tag() -> None
```

##### `reset_target` <a name="reset_target" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetTarget"></a>

```python
def reset_target() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_usage` <a name="reset_usage" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetUsage"></a>

```python
def reset_usage() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetValue"></a>

```python
def reset_value() -> None
```

##### `reset_weight` <a name="reset_weight" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.resetWeight"></a>

```python
def reset_weight() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.algorithmInput">algorithm_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.altitudeInput">altitude_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.certificateInput">certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.digestInput">digest_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.digestTypeInput">digest_type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.fingerprintInput">fingerprint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.flagsInput">flags_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.keyTagInput">key_tag_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latDegreesInput">lat_degrees_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latDirectionInput">lat_direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latMinutesInput">lat_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latSecondsInput">lat_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longDegreesInput">long_degrees_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longDirectionInput">long_direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longMinutesInput">long_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longSecondsInput">long_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.matchingTypeInput">matching_type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.orderInput">order_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.precisionHorzInput">precision_horz_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.precisionVertInput">precision_vert_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.preferenceInput">preference_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.protocolInput">protocol_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.protoInput">proto_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.publicKeyInput">public_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.regexInput">regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.replacementInput">replacement_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.selectorInput">selector_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.tagInput">tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.typeInput">type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.usageInput">usage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.algorithm">algorithm</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.altitude">altitude</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.certificate">certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.digest">digest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.digestType">digest_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.fingerprint">fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.flags">flags</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.keyTag">key_tag</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latDegrees">lat_degrees</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latDirection">lat_direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latMinutes">lat_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latSeconds">lat_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longDegrees">long_degrees</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longDirection">long_direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longMinutes">long_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longSeconds">long_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.matchingType">matching_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.order">order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.precisionHorz">precision_horz</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.precisionVert">precision_vert</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.preference">preference</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.proto">proto</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.protocol">protocol</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.publicKey">public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.regex">regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.replacement">replacement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.selector">selector</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.tag">tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.type">type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.usage">usage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.record.RecordData">RecordData</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `algorithm_input`<sup>Optional</sup> <a name="algorithm_input" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.algorithmInput"></a>

```python
algorithm_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `altitude_input`<sup>Optional</sup> <a name="altitude_input" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.altitudeInput"></a>

```python
altitude_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `certificate_input`<sup>Optional</sup> <a name="certificate_input" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.certificateInput"></a>

```python
certificate_input: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `digest_input`<sup>Optional</sup> <a name="digest_input" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.digestInput"></a>

```python
digest_input: str
```

- *Type:* str

---

##### `digest_type_input`<sup>Optional</sup> <a name="digest_type_input" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.digestTypeInput"></a>

```python
digest_type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fingerprint_input`<sup>Optional</sup> <a name="fingerprint_input" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.fingerprintInput"></a>

```python
fingerprint_input: str
```

- *Type:* str

---

##### `flags_input`<sup>Optional</sup> <a name="flags_input" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.flagsInput"></a>

```python
flags_input: str
```

- *Type:* str

---

##### `key_tag_input`<sup>Optional</sup> <a name="key_tag_input" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.keyTagInput"></a>

```python
key_tag_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lat_degrees_input`<sup>Optional</sup> <a name="lat_degrees_input" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latDegreesInput"></a>

```python
lat_degrees_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lat_direction_input`<sup>Optional</sup> <a name="lat_direction_input" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latDirectionInput"></a>

```python
lat_direction_input: str
```

- *Type:* str

---

##### `lat_minutes_input`<sup>Optional</sup> <a name="lat_minutes_input" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latMinutesInput"></a>

```python
lat_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lat_seconds_input`<sup>Optional</sup> <a name="lat_seconds_input" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latSecondsInput"></a>

```python
lat_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `long_degrees_input`<sup>Optional</sup> <a name="long_degrees_input" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longDegreesInput"></a>

```python
long_degrees_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `long_direction_input`<sup>Optional</sup> <a name="long_direction_input" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longDirectionInput"></a>

```python
long_direction_input: str
```

- *Type:* str

---

##### `long_minutes_input`<sup>Optional</sup> <a name="long_minutes_input" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longMinutesInput"></a>

```python
long_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `long_seconds_input`<sup>Optional</sup> <a name="long_seconds_input" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longSecondsInput"></a>

```python
long_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `matching_type_input`<sup>Optional</sup> <a name="matching_type_input" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.matchingTypeInput"></a>

```python
matching_type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.orderInput"></a>

```python
order_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `precision_horz_input`<sup>Optional</sup> <a name="precision_horz_input" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.precisionHorzInput"></a>

```python
precision_horz_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `precision_vert_input`<sup>Optional</sup> <a name="precision_vert_input" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.precisionVertInput"></a>

```python
precision_vert_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `preference_input`<sup>Optional</sup> <a name="preference_input" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.preferenceInput"></a>

```python
preference_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.protocolInput"></a>

```python
protocol_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `proto_input`<sup>Optional</sup> <a name="proto_input" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.protoInput"></a>

```python
proto_input: str
```

- *Type:* str

---

##### `public_key_input`<sup>Optional</sup> <a name="public_key_input" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.publicKeyInput"></a>

```python
public_key_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.regexInput"></a>

```python
regex_input: str
```

- *Type:* str

---

##### `replacement_input`<sup>Optional</sup> <a name="replacement_input" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.replacementInput"></a>

```python
replacement_input: str
```

- *Type:* str

---

##### `selector_input`<sup>Optional</sup> <a name="selector_input" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.selectorInput"></a>

```python
selector_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tag_input`<sup>Optional</sup> <a name="tag_input" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.tagInput"></a>

```python
tag_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.typeInput"></a>

```python
type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `usage_input`<sup>Optional</sup> <a name="usage_input" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.usageInput"></a>

```python
usage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.algorithm"></a>

```python
algorithm: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `altitude`<sup>Required</sup> <a name="altitude" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.altitude"></a>

```python
altitude: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `digest`<sup>Required</sup> <a name="digest" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.digest"></a>

```python
digest: str
```

- *Type:* str

---

##### `digest_type`<sup>Required</sup> <a name="digest_type" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.digestType"></a>

```python
digest_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

---

##### `flags`<sup>Required</sup> <a name="flags" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.flags"></a>

```python
flags: str
```

- *Type:* str

---

##### `key_tag`<sup>Required</sup> <a name="key_tag" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.keyTag"></a>

```python
key_tag: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lat_degrees`<sup>Required</sup> <a name="lat_degrees" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latDegrees"></a>

```python
lat_degrees: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lat_direction`<sup>Required</sup> <a name="lat_direction" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latDirection"></a>

```python
lat_direction: str
```

- *Type:* str

---

##### `lat_minutes`<sup>Required</sup> <a name="lat_minutes" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latMinutes"></a>

```python
lat_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lat_seconds`<sup>Required</sup> <a name="lat_seconds" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.latSeconds"></a>

```python
lat_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `long_degrees`<sup>Required</sup> <a name="long_degrees" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longDegrees"></a>

```python
long_degrees: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `long_direction`<sup>Required</sup> <a name="long_direction" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longDirection"></a>

```python
long_direction: str
```

- *Type:* str

---

##### `long_minutes`<sup>Required</sup> <a name="long_minutes" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longMinutes"></a>

```python
long_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `long_seconds`<sup>Required</sup> <a name="long_seconds" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.longSeconds"></a>

```python
long_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `matching_type`<sup>Required</sup> <a name="matching_type" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.matchingType"></a>

```python
matching_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `precision_horz`<sup>Required</sup> <a name="precision_horz" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.precisionHorz"></a>

```python
precision_horz: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `precision_vert`<sup>Required</sup> <a name="precision_vert" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.precisionVert"></a>

```python
precision_vert: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `preference`<sup>Required</sup> <a name="preference" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.preference"></a>

```python
preference: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `proto`<sup>Required</sup> <a name="proto" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.proto"></a>

```python
proto: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.protocol"></a>

```python
protocol: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.regex"></a>

```python
regex: str
```

- *Type:* str

---

##### `replacement`<sup>Required</sup> <a name="replacement" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.replacement"></a>

```python
replacement: str
```

- *Type:* str

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.selector"></a>

```python
selector: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.tag"></a>

```python
tag: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.type"></a>

```python
type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `usage`<sup>Required</sup> <a name="usage" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.usage"></a>

```python
usage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.record.RecordDataOutputReference.property.internalValue"></a>

```python
internal_value: RecordData
```

- *Type:* <a href="#@cdktf/provider-cloudflare.record.RecordData">RecordData</a>

---


### RecordTimeoutsOutputReference <a name="RecordTimeoutsOutputReference" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import record

record.RecordTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.record.RecordTimeouts">RecordTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.record.RecordTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, RecordTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.record.RecordTimeouts">RecordTimeouts</a>]

---



