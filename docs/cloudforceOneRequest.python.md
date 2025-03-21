# `cloudforceOneRequest` Submodule <a name="`cloudforceOneRequest` Submodule" id="@cdktf/provider-cloudflare.cloudforceOneRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudforceOneRequest <a name="CloudforceOneRequest" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/cloudforce_one_request cloudflare_cloudforce_one_request}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import cloudforce_one_request

cloudforceOneRequest.CloudforceOneRequest(
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
  content: str = None,
  priority: str = None,
  request_type: str = None,
  summary: str = None,
  tlp: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.accountIdentifier">account_identifier</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.content">content</a></code> | <code>str</code> | Request content. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.priority">priority</a></code> | <code>str</code> | Priority for analyzing the request. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.requestType">request_type</a></code> | <code>str</code> | Requested information from request. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.summary">summary</a></code> | <code>str</code> | Brief description of the request. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.tlp">tlp</a></code> | <code>str</code> | The CISA defined Traffic Light Protocol (TLP) Available values: "clear", "amber", "amber-strict", "green", "red". |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_identifier`<sup>Required</sup> <a name="account_identifier" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.accountIdentifier"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/cloudforce_one_request#account_identifier CloudforceOneRequest#account_identifier}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.content"></a>

- *Type:* str

Request content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/cloudforce_one_request#content CloudforceOneRequest#content}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.priority"></a>

- *Type:* str

Priority for analyzing the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/cloudforce_one_request#priority CloudforceOneRequest#priority}

---

##### `request_type`<sup>Optional</sup> <a name="request_type" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.requestType"></a>

- *Type:* str

Requested information from request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/cloudforce_one_request#request_type CloudforceOneRequest#request_type}

---

##### `summary`<sup>Optional</sup> <a name="summary" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.summary"></a>

- *Type:* str

Brief description of the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/cloudforce_one_request#summary CloudforceOneRequest#summary}

---

##### `tlp`<sup>Optional</sup> <a name="tlp" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.tlp"></a>

- *Type:* str

The CISA defined Traffic Light Protocol (TLP) Available values: "clear", "amber", "amber-strict", "green", "red".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/cloudforce_one_request#tlp CloudforceOneRequest#tlp}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.resetContent">reset_content</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.resetRequestType">reset_request_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.resetSummary">reset_summary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.resetTlp">reset_tlp</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_content` <a name="reset_content" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.resetContent"></a>

```python
def reset_content() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_request_type` <a name="reset_request_type" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.resetRequestType"></a>

```python
def reset_request_type() -> None
```

##### `reset_summary` <a name="reset_summary" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.resetSummary"></a>

```python
def reset_summary() -> None
```

##### `reset_tlp` <a name="reset_tlp" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.resetTlp"></a>

```python
def reset_tlp() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CloudforceOneRequest resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import cloudforce_one_request

cloudforceOneRequest.CloudforceOneRequest.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import cloudforce_one_request

cloudforceOneRequest.CloudforceOneRequest.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import cloudforce_one_request

cloudforceOneRequest.CloudforceOneRequest.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import cloudforce_one_request

cloudforceOneRequest.CloudforceOneRequest.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CloudforceOneRequest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudforceOneRequest to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudforceOneRequest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/cloudforce_one_request#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudforceOneRequest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.completed">completed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.messageTokens">message_tokens</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.readableId">readable_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.request">request</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.tokens">tokens</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.updated">updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.accountIdentifierInput">account_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.priorityInput">priority_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.requestTypeInput">request_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.summaryInput">summary_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.tlpInput">tlp_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.accountIdentifier">account_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.priority">priority</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.requestType">request_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.summary">summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.tlp">tlp</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `completed`<sup>Required</sup> <a name="completed" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.completed"></a>

```python
completed: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `message_tokens`<sup>Required</sup> <a name="message_tokens" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.messageTokens"></a>

```python
message_tokens: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `readable_id`<sup>Required</sup> <a name="readable_id" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.readableId"></a>

```python
readable_id: str
```

- *Type:* str

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.request"></a>

```python
request: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tokens`<sup>Required</sup> <a name="tokens" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.tokens"></a>

```python
tokens: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `updated`<sup>Required</sup> <a name="updated" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.updated"></a>

```python
updated: str
```

- *Type:* str

---

##### `account_identifier_input`<sup>Optional</sup> <a name="account_identifier_input" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.accountIdentifierInput"></a>

```python
account_identifier_input: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.priorityInput"></a>

```python
priority_input: str
```

- *Type:* str

---

##### `request_type_input`<sup>Optional</sup> <a name="request_type_input" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.requestTypeInput"></a>

```python
request_type_input: str
```

- *Type:* str

---

##### `summary_input`<sup>Optional</sup> <a name="summary_input" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.summaryInput"></a>

```python
summary_input: str
```

- *Type:* str

---

##### `tlp_input`<sup>Optional</sup> <a name="tlp_input" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.tlpInput"></a>

```python
tlp_input: str
```

- *Type:* str

---

##### `account_identifier`<sup>Required</sup> <a name="account_identifier" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.accountIdentifier"></a>

```python
account_identifier: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.priority"></a>

```python
priority: str
```

- *Type:* str

---

##### `request_type`<sup>Required</sup> <a name="request_type" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.requestType"></a>

```python
request_type: str
```

- *Type:* str

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.summary"></a>

```python
summary: str
```

- *Type:* str

---

##### `tlp`<sup>Required</sup> <a name="tlp" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.tlp"></a>

```python
tlp: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudforceOneRequestConfig <a name="CloudforceOneRequestConfig" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import cloudforce_one_request

cloudforceOneRequest.CloudforceOneRequestConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_identifier: str,
  content: str = None,
  priority: str = None,
  request_type: str = None,
  summary: str = None,
  tlp: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.accountIdentifier">account_identifier</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.content">content</a></code> | <code>str</code> | Request content. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.priority">priority</a></code> | <code>str</code> | Priority for analyzing the request. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.requestType">request_type</a></code> | <code>str</code> | Requested information from request. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.summary">summary</a></code> | <code>str</code> | Brief description of the request. |
| <code><a href="#@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.tlp">tlp</a></code> | <code>str</code> | The CISA defined Traffic Light Protocol (TLP) Available values: "clear", "amber", "amber-strict", "green", "red". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_identifier`<sup>Required</sup> <a name="account_identifier" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.accountIdentifier"></a>

```python
account_identifier: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/cloudforce_one_request#account_identifier CloudforceOneRequest#account_identifier}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.content"></a>

```python
content: str
```

- *Type:* str

Request content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/cloudforce_one_request#content CloudforceOneRequest#content}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.priority"></a>

```python
priority: str
```

- *Type:* str

Priority for analyzing the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/cloudforce_one_request#priority CloudforceOneRequest#priority}

---

##### `request_type`<sup>Optional</sup> <a name="request_type" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.requestType"></a>

```python
request_type: str
```

- *Type:* str

Requested information from request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/cloudforce_one_request#request_type CloudforceOneRequest#request_type}

---

##### `summary`<sup>Optional</sup> <a name="summary" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.summary"></a>

```python
summary: str
```

- *Type:* str

Brief description of the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/cloudforce_one_request#summary CloudforceOneRequest#summary}

---

##### `tlp`<sup>Optional</sup> <a name="tlp" id="@cdktf/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.tlp"></a>

```python
tlp: str
```

- *Type:* str

The CISA defined Traffic Light Protocol (TLP) Available values: "clear", "amber", "amber-strict", "green", "red".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/cloudforce_one_request#tlp CloudforceOneRequest#tlp}

---



