# `cloudforceOneRequestPriority` Submodule <a name="`cloudforceOneRequestPriority` Submodule" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudforceOneRequestPriority <a name="CloudforceOneRequestPriority" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/cloudforce_one_request_priority cloudflare_cloudforce_one_request_priority}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import cloudforce_one_request_priority

cloudforceOneRequestPriority.CloudforceOneRequestPriority(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_identifier: str,
  labels: typing.List[str],
  priority: typing.Union[int, float],
  requirement: str,
  tlp: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.Initializer.parameter.accountIdentifier">account_identifier</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.Initializer.parameter.labels">labels</a></code> | <code>typing.List[str]</code> | List of labels. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Priority. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.Initializer.parameter.requirement">requirement</a></code> | <code>str</code> | Requirement. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.Initializer.parameter.tlp">tlp</a></code> | <code>str</code> | The CISA defined Traffic Light Protocol (TLP) Available values: "clear", "amber", "amber-strict", "green", "red". |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_identifier`<sup>Required</sup> <a name="account_identifier" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.Initializer.parameter.accountIdentifier"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/cloudforce_one_request_priority#account_identifier CloudforceOneRequestPriority#account_identifier}

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.Initializer.parameter.labels"></a>

- *Type:* typing.List[str]

List of labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/cloudforce_one_request_priority#labels CloudforceOneRequestPriority#labels}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/cloudforce_one_request_priority#priority CloudforceOneRequestPriority#priority}

---

##### `requirement`<sup>Required</sup> <a name="requirement" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.Initializer.parameter.requirement"></a>

- *Type:* str

Requirement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/cloudforce_one_request_priority#requirement CloudforceOneRequestPriority#requirement}

---

##### `tlp`<sup>Required</sup> <a name="tlp" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.Initializer.parameter.tlp"></a>

- *Type:* str

The CISA defined Traffic Light Protocol (TLP) Available values: "clear", "amber", "amber-strict", "green", "red".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/cloudforce_one_request_priority#tlp CloudforceOneRequestPriority#tlp}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CloudforceOneRequestPriority resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import cloudforce_one_request_priority

cloudforceOneRequestPriority.CloudforceOneRequestPriority.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import cloudforce_one_request_priority

cloudforceOneRequestPriority.CloudforceOneRequestPriority.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import cloudforce_one_request_priority

cloudforceOneRequestPriority.CloudforceOneRequestPriority.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import cloudforce_one_request_priority

cloudforceOneRequestPriority.CloudforceOneRequestPriority.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CloudforceOneRequestPriority resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudforceOneRequestPriority to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudforceOneRequestPriority that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/cloudforce_one_request_priority#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudforceOneRequestPriority to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.completed">completed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.messageTokens">message_tokens</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.readableId">readable_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.request">request</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.summary">summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.tokens">tokens</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.updated">updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.accountIdentifierInput">account_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.labelsInput">labels_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.requirementInput">requirement_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.tlpInput">tlp_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.accountIdentifier">account_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.labels">labels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.requirement">requirement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.tlp">tlp</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `completed`<sup>Required</sup> <a name="completed" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.completed"></a>

```python
completed: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `message_tokens`<sup>Required</sup> <a name="message_tokens" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.messageTokens"></a>

```python
message_tokens: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `readable_id`<sup>Required</sup> <a name="readable_id" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.readableId"></a>

```python
readable_id: str
```

- *Type:* str

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.request"></a>

```python
request: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.summary"></a>

```python
summary: str
```

- *Type:* str

---

##### `tokens`<sup>Required</sup> <a name="tokens" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.tokens"></a>

```python
tokens: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `updated`<sup>Required</sup> <a name="updated" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.updated"></a>

```python
updated: str
```

- *Type:* str

---

##### `account_identifier_input`<sup>Optional</sup> <a name="account_identifier_input" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.accountIdentifierInput"></a>

```python
account_identifier_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.labelsInput"></a>

```python
labels_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `requirement_input`<sup>Optional</sup> <a name="requirement_input" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.requirementInput"></a>

```python
requirement_input: str
```

- *Type:* str

---

##### `tlp_input`<sup>Optional</sup> <a name="tlp_input" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.tlpInput"></a>

```python
tlp_input: str
```

- *Type:* str

---

##### `account_identifier`<sup>Required</sup> <a name="account_identifier" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.accountIdentifier"></a>

```python
account_identifier: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.labels"></a>

```python
labels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `requirement`<sup>Required</sup> <a name="requirement" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.requirement"></a>

```python
requirement: str
```

- *Type:* str

---

##### `tlp`<sup>Required</sup> <a name="tlp" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.tlp"></a>

```python
tlp: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriority.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudforceOneRequestPriorityConfig <a name="CloudforceOneRequestPriorityConfig" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import cloudforce_one_request_priority

cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_identifier: str,
  labels: typing.List[str],
  priority: typing.Union[int, float],
  requirement: str,
  tlp: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig.property.accountIdentifier">account_identifier</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig.property.labels">labels</a></code> | <code>typing.List[str]</code> | List of labels. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Priority. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig.property.requirement">requirement</a></code> | <code>str</code> | Requirement. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig.property.tlp">tlp</a></code> | <code>str</code> | The CISA defined Traffic Light Protocol (TLP) Available values: "clear", "amber", "amber-strict", "green", "red". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_identifier`<sup>Required</sup> <a name="account_identifier" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig.property.accountIdentifier"></a>

```python
account_identifier: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/cloudforce_one_request_priority#account_identifier CloudforceOneRequestPriority#account_identifier}

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig.property.labels"></a>

```python
labels: typing.List[str]
```

- *Type:* typing.List[str]

List of labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/cloudforce_one_request_priority#labels CloudforceOneRequestPriority#labels}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/cloudforce_one_request_priority#priority CloudforceOneRequestPriority#priority}

---

##### `requirement`<sup>Required</sup> <a name="requirement" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig.property.requirement"></a>

```python
requirement: str
```

- *Type:* str

Requirement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/cloudforce_one_request_priority#requirement CloudforceOneRequestPriority#requirement}

---

##### `tlp`<sup>Required</sup> <a name="tlp" id="@cdktf/provider-cloudflare.cloudforceOneRequestPriority.CloudforceOneRequestPriorityConfig.property.tlp"></a>

```python
tlp: str
```

- *Type:* str

The CISA defined Traffic Light Protocol (TLP) Available values: "clear", "amber", "amber-strict", "green", "red".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/cloudforce_one_request_priority#tlp CloudforceOneRequestPriority#tlp}

---



