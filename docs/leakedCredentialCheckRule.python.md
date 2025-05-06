# `leakedCredentialCheckRule` Submodule <a name="`leakedCredentialCheckRule` Submodule" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LeakedCredentialCheckRule <a name="LeakedCredentialCheckRule" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/leaked_credential_check_rule cloudflare_leaked_credential_check_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import leaked_credential_check_rule

leakedCredentialCheckRule.LeakedCredentialCheckRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  zone_id: str,
  password: str = None,
  username: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | Defines an identifier. |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.Initializer.parameter.password">password</a></code> | <code>str</code> | Defines ehe ruleset expression to use in matching the password in a request. |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.Initializer.parameter.username">username</a></code> | <code>str</code> | Defines the ruleset expression to use in matching the username in a request. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.Initializer.parameter.zoneId"></a>

- *Type:* str

Defines an identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/leaked_credential_check_rule#zone_id LeakedCredentialCheckRule#zone_id}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.Initializer.parameter.password"></a>

- *Type:* str

Defines ehe ruleset expression to use in matching the password in a request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/leaked_credential_check_rule#password LeakedCredentialCheckRule#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.Initializer.parameter.username"></a>

- *Type:* str

Defines the ruleset expression to use in matching the username in a request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/leaked_credential_check_rule#username LeakedCredentialCheckRule#username}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.resetUsername">reset_username</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_password` <a name="reset_password" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.resetUsername"></a>

```python
def reset_username() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LeakedCredentialCheckRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import leaked_credential_check_rule

leakedCredentialCheckRule.LeakedCredentialCheckRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import leaked_credential_check_rule

leakedCredentialCheckRule.LeakedCredentialCheckRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import leaked_credential_check_rule

leakedCredentialCheckRule.LeakedCredentialCheckRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import leaked_credential_check_rule

leakedCredentialCheckRule.LeakedCredentialCheckRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LeakedCredentialCheckRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LeakedCredentialCheckRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LeakedCredentialCheckRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/leaked_credential_check_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LeakedCredentialCheckRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LeakedCredentialCheckRuleConfig <a name="LeakedCredentialCheckRuleConfig" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import leaked_credential_check_rule

leakedCredentialCheckRule.LeakedCredentialCheckRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  zone_id: str,
  password: str = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRuleConfig.property.zoneId">zone_id</a></code> | <code>str</code> | Defines an identifier. |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRuleConfig.property.password">password</a></code> | <code>str</code> | Defines ehe ruleset expression to use in matching the password in a request. |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRuleConfig.property.username">username</a></code> | <code>str</code> | Defines the ruleset expression to use in matching the username in a request. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRuleConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

Defines an identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/leaked_credential_check_rule#zone_id LeakedCredentialCheckRule#zone_id}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRuleConfig.property.password"></a>

```python
password: str
```

- *Type:* str

Defines ehe ruleset expression to use in matching the password in a request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/leaked_credential_check_rule#password LeakedCredentialCheckRule#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRuleConfig.property.username"></a>

```python
username: str
```

- *Type:* str

Defines the ruleset expression to use in matching the username in a request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/leaked_credential_check_rule#username LeakedCredentialCheckRule#username}

---



