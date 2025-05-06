# `accountToken` Submodule <a name="`accountToken` Submodule" id="@cdktf/provider-cloudflare.accountToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccountToken <a name="AccountToken" id="@cdktf/provider-cloudflare.accountToken.AccountToken"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/account_token cloudflare_account_token}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accountToken.AccountToken.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import account_token

accountToken.AccountToken(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  name: str,
  policies: typing.Union[IResolvable, typing.List[AccountTokenPolicies]],
  condition: AccountTokenCondition = None,
  expires_on: str = None,
  not_before: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Account identifier tag. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.Initializer.parameter.name">name</a></code> | <code>str</code> | Token name. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.Initializer.parameter.policies">policies</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPolicies">AccountTokenPolicies</a>]]</code> | List of access policies assigned to the token. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenCondition">AccountTokenCondition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/account_token#condition AccountToken#condition}. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.Initializer.parameter.expiresOn">expires_on</a></code> | <code>str</code> | The expiration time on or after which the JWT MUST NOT be accepted for processing. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.Initializer.parameter.notBefore">not_before</a></code> | <code>str</code> | The time before which the token MUST NOT be accepted for processing. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accountToken.AccountToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountToken.AccountToken.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accountToken.AccountToken.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accountToken.AccountToken.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.accountToken.AccountToken.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.accountToken.AccountToken.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accountToken.AccountToken.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accountToken.AccountToken.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accountToken.AccountToken.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.accountToken.AccountToken.Initializer.parameter.accountId"></a>

- *Type:* str

Account identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/account_token#account_id AccountToken#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accountToken.AccountToken.Initializer.parameter.name"></a>

- *Type:* str

Token name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/account_token#name AccountToken#name}

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-cloudflare.accountToken.AccountToken.Initializer.parameter.policies"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPolicies">AccountTokenPolicies</a>]]

List of access policies assigned to the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/account_token#policies AccountToken#policies}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-cloudflare.accountToken.AccountToken.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenCondition">AccountTokenCondition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/account_token#condition AccountToken#condition}.

---

##### `expires_on`<sup>Optional</sup> <a name="expires_on" id="@cdktf/provider-cloudflare.accountToken.AccountToken.Initializer.parameter.expiresOn"></a>

- *Type:* str

The expiration time on or after which the JWT MUST NOT be accepted for processing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/account_token#expires_on AccountToken#expires_on}

---

##### `not_before`<sup>Optional</sup> <a name="not_before" id="@cdktf/provider-cloudflare.accountToken.AccountToken.Initializer.parameter.notBefore"></a>

- *Type:* str

The time before which the token MUST NOT be accepted for processing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/account_token#not_before AccountToken#not_before}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.putPolicies">put_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.resetExpiresOn">reset_expires_on</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.resetNotBefore">reset_not_before</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accountToken.AccountToken.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.accountToken.AccountToken.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.accountToken.AccountToken.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accountToken.AccountToken.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.accountToken.AccountToken.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.accountToken.AccountToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.accountToken.AccountToken.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.accountToken.AccountToken.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.accountToken.AccountToken.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.accountToken.AccountToken.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.accountToken.AccountToken.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.accountToken.AccountToken.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountToken.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountToken.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountToken.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountToken.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountToken.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountToken.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountToken.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountToken.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountToken.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.accountToken.AccountToken.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.accountToken.AccountToken.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountToken.AccountToken.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accountToken.AccountToken.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountToken.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.accountToken.AccountToken.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountToken.AccountToken.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.accountToken.AccountToken.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.accountToken.AccountToken.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.accountToken.AccountToken.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.accountToken.AccountToken.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountToken.AccountToken.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-cloudflare.accountToken.AccountToken.putCondition"></a>

```python
def put_condition(
  request_ip: AccountTokenConditionRequestIp = None
) -> None
```

###### `request_ip`<sup>Optional</sup> <a name="request_ip" id="@cdktf/provider-cloudflare.accountToken.AccountToken.putCondition.parameter.requestIp"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIp">AccountTokenConditionRequestIp</a>

Client IP restrictions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/account_token#request_ip AccountToken#request_ip}

---

##### `put_policies` <a name="put_policies" id="@cdktf/provider-cloudflare.accountToken.AccountToken.putPolicies"></a>

```python
def put_policies(
  value: typing.Union[IResolvable, typing.List[AccountTokenPolicies]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accountToken.AccountToken.putPolicies.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPolicies">AccountTokenPolicies</a>]]

---

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-cloudflare.accountToken.AccountToken.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_expires_on` <a name="reset_expires_on" id="@cdktf/provider-cloudflare.accountToken.AccountToken.resetExpiresOn"></a>

```python
def reset_expires_on() -> None
```

##### `reset_not_before` <a name="reset_not_before" id="@cdktf/provider-cloudflare.accountToken.AccountToken.resetNotBefore"></a>

```python
def reset_not_before() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AccountToken resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.accountToken.AccountToken.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import account_token

accountToken.AccountToken.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accountToken.AccountToken.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.accountToken.AccountToken.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import account_token

accountToken.AccountToken.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accountToken.AccountToken.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.accountToken.AccountToken.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import account_token

accountToken.AccountToken.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accountToken.AccountToken.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.accountToken.AccountToken.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import account_token

accountToken.AccountToken.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AccountToken resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accountToken.AccountToken.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.accountToken.AccountToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AccountToken to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.accountToken.AccountToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AccountToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/account_token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accountToken.AccountToken.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AccountToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference">AccountTokenConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.issuedOn">issued_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.lastUsedOn">last_used_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.modifiedOn">modified_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.policies">policies</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList">AccountTokenPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.conditionInput">condition_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenCondition">AccountTokenCondition</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.expiresOnInput">expires_on_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.notBeforeInput">not_before_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.policiesInput">policies_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPolicies">AccountTokenPolicies</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.expiresOn">expires_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.notBefore">not_before</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.condition"></a>

```python
condition: AccountTokenConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference">AccountTokenConditionOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `issued_on`<sup>Required</sup> <a name="issued_on" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.issuedOn"></a>

```python
issued_on: str
```

- *Type:* str

---

##### `last_used_on`<sup>Required</sup> <a name="last_used_on" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.lastUsedOn"></a>

```python
last_used_on: str
```

- *Type:* str

---

##### `modified_on`<sup>Required</sup> <a name="modified_on" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.modifiedOn"></a>

```python
modified_on: str
```

- *Type:* str

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.policies"></a>

```python
policies: AccountTokenPoliciesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList">AccountTokenPoliciesList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.conditionInput"></a>

```python
condition_input: typing.Union[IResolvable, AccountTokenCondition]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenCondition">AccountTokenCondition</a>]

---

##### `expires_on_input`<sup>Optional</sup> <a name="expires_on_input" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.expiresOnInput"></a>

```python
expires_on_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `not_before_input`<sup>Optional</sup> <a name="not_before_input" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.notBeforeInput"></a>

```python
not_before_input: str
```

- *Type:* str

---

##### `policies_input`<sup>Optional</sup> <a name="policies_input" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.policiesInput"></a>

```python
policies_input: typing.Union[IResolvable, typing.List[AccountTokenPolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPolicies">AccountTokenPolicies</a>]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `expires_on`<sup>Required</sup> <a name="expires_on" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.expiresOn"></a>

```python
expires_on: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `not_before`<sup>Required</sup> <a name="not_before" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.notBefore"></a>

```python
not_before: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountToken.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.accountToken.AccountToken.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AccountTokenCondition <a name="AccountTokenCondition" id="@cdktf/provider-cloudflare.accountToken.AccountTokenCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accountToken.AccountTokenCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import account_token

accountToken.AccountTokenCondition(
  request_ip: AccountTokenConditionRequestIp = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenCondition.property.requestIp">request_ip</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIp">AccountTokenConditionRequestIp</a></code> | Client IP restrictions. |

---

##### `request_ip`<sup>Optional</sup> <a name="request_ip" id="@cdktf/provider-cloudflare.accountToken.AccountTokenCondition.property.requestIp"></a>

```python
request_ip: AccountTokenConditionRequestIp
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIp">AccountTokenConditionRequestIp</a>

Client IP restrictions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/account_token#request_ip AccountToken#request_ip}

---

### AccountTokenConditionRequestIp <a name="AccountTokenConditionRequestIp" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIp.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import account_token

accountToken.AccountTokenConditionRequestIp(
  in: typing.List[str] = None,
  not_in: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIp.property.in">in</a></code> | <code>typing.List[str]</code> | List of IPv4/IPv6 CIDR addresses. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIp.property.notIn">not_in</a></code> | <code>typing.List[str]</code> | List of IPv4/IPv6 CIDR addresses. |

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIp.property.in"></a>

```python
in: typing.List[str]
```

- *Type:* typing.List[str]

List of IPv4/IPv6 CIDR addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/account_token#in AccountToken#in}

---

##### `not_in`<sup>Optional</sup> <a name="not_in" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIp.property.notIn"></a>

```python
not_in: typing.List[str]
```

- *Type:* typing.List[str]

List of IPv4/IPv6 CIDR addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/account_token#not_in AccountToken#not_in}

---

### AccountTokenConfig <a name="AccountTokenConfig" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import account_token

accountToken.AccountTokenConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  name: str,
  policies: typing.Union[IResolvable, typing.List[AccountTokenPolicies]],
  condition: AccountTokenCondition = None,
  expires_on: str = None,
  not_before: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.accountId">account_id</a></code> | <code>str</code> | Account identifier tag. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.name">name</a></code> | <code>str</code> | Token name. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.policies">policies</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPolicies">AccountTokenPolicies</a>]]</code> | List of access policies assigned to the token. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenCondition">AccountTokenCondition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/account_token#condition AccountToken#condition}. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.expiresOn">expires_on</a></code> | <code>str</code> | The expiration time on or after which the JWT MUST NOT be accepted for processing. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.notBefore">not_before</a></code> | <code>str</code> | The time before which the token MUST NOT be accepted for processing. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Account identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/account_token#account_id AccountToken#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Token name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/account_token#name AccountToken#name}

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.policies"></a>

```python
policies: typing.Union[IResolvable, typing.List[AccountTokenPolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPolicies">AccountTokenPolicies</a>]]

List of access policies assigned to the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/account_token#policies AccountToken#policies}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.condition"></a>

```python
condition: AccountTokenCondition
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenCondition">AccountTokenCondition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/account_token#condition AccountToken#condition}.

---

##### `expires_on`<sup>Optional</sup> <a name="expires_on" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.expiresOn"></a>

```python
expires_on: str
```

- *Type:* str

The expiration time on or after which the JWT MUST NOT be accepted for processing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/account_token#expires_on AccountToken#expires_on}

---

##### `not_before`<sup>Optional</sup> <a name="not_before" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConfig.property.notBefore"></a>

```python
not_before: str
```

- *Type:* str

The time before which the token MUST NOT be accepted for processing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/account_token#not_before AccountToken#not_before}

---

### AccountTokenPolicies <a name="AccountTokenPolicies" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPolicies.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import account_token

accountToken.AccountTokenPolicies(
  effect: str,
  permission_groups: typing.Union[IResolvable, typing.List[AccountTokenPoliciesPermissionGroups]],
  resources: typing.Mapping[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPolicies.property.effect">effect</a></code> | <code>str</code> | Allow or deny operations against the resources. Available values: "allow", "deny". |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPolicies.property.permissionGroups">permission_groups</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroups">AccountTokenPoliciesPermissionGroups</a>]]</code> | A set of permission groups that are specified to the policy. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPolicies.property.resources">resources</a></code> | <code>typing.Mapping[str]</code> | A list of resource names that the policy applies to. |

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPolicies.property.effect"></a>

```python
effect: str
```

- *Type:* str

Allow or deny operations against the resources. Available values: "allow", "deny".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/account_token#effect AccountToken#effect}

---

##### `permission_groups`<sup>Required</sup> <a name="permission_groups" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPolicies.property.permissionGroups"></a>

```python
permission_groups: typing.Union[IResolvable, typing.List[AccountTokenPoliciesPermissionGroups]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroups">AccountTokenPoliciesPermissionGroups</a>]]

A set of permission groups that are specified to the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/account_token#permission_groups AccountToken#permission_groups}

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPolicies.property.resources"></a>

```python
resources: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A list of resource names that the policy applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/account_token#resources AccountToken#resources}

---

### AccountTokenPoliciesPermissionGroups <a name="AccountTokenPoliciesPermissionGroups" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroups.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import account_token

accountToken.AccountTokenPoliciesPermissionGroups(
  id: str,
  meta: AccountTokenPoliciesPermissionGroupsMeta = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroups.property.id">id</a></code> | <code>str</code> | Identifier of the group. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroups.property.meta">meta</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMeta">AccountTokenPoliciesPermissionGroupsMeta</a></code> | Attributes associated to the permission group. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroups.property.id"></a>

```python
id: str
```

- *Type:* str

Identifier of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/account_token#id AccountToken#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `meta`<sup>Optional</sup> <a name="meta" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroups.property.meta"></a>

```python
meta: AccountTokenPoliciesPermissionGroupsMeta
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMeta">AccountTokenPoliciesPermissionGroupsMeta</a>

Attributes associated to the permission group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/account_token#meta AccountToken#meta}

---

### AccountTokenPoliciesPermissionGroupsMeta <a name="AccountTokenPoliciesPermissionGroupsMeta" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMeta"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMeta.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import account_token

accountToken.AccountTokenPoliciesPermissionGroupsMeta(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMeta.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/account_token#key AccountToken#key}. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMeta.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/account_token#value AccountToken#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMeta.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/account_token#key AccountToken#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMeta.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/account_token#value AccountToken#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccountTokenConditionOutputReference <a name="AccountTokenConditionOutputReference" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import account_token

accountToken.AccountTokenConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.putRequestIp">put_request_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.resetRequestIp">reset_request_ip</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_request_ip` <a name="put_request_ip" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.putRequestIp"></a>

```python
def put_request_ip(
  in: typing.List[str] = None,
  not_in: typing.List[str] = None
) -> None
```

###### `in`<sup>Optional</sup> <a name="in" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.putRequestIp.parameter.in"></a>

- *Type:* typing.List[str]

List of IPv4/IPv6 CIDR addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/account_token#in AccountToken#in}

---

###### `not_in`<sup>Optional</sup> <a name="not_in" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.putRequestIp.parameter.notIn"></a>

- *Type:* typing.List[str]

List of IPv4/IPv6 CIDR addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/account_token#not_in AccountToken#not_in}

---

##### `reset_request_ip` <a name="reset_request_ip" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.resetRequestIp"></a>

```python
def reset_request_ip() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.property.requestIp">request_ip</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference">AccountTokenConditionRequestIpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.property.requestIpInput">request_ip_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIp">AccountTokenConditionRequestIp</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenCondition">AccountTokenCondition</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `request_ip`<sup>Required</sup> <a name="request_ip" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.property.requestIp"></a>

```python
request_ip: AccountTokenConditionRequestIpOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference">AccountTokenConditionRequestIpOutputReference</a>

---

##### `request_ip_input`<sup>Optional</sup> <a name="request_ip_input" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.property.requestIpInput"></a>

```python
request_ip_input: typing.Union[IResolvable, AccountTokenConditionRequestIp]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIp">AccountTokenConditionRequestIp</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccountTokenCondition]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenCondition">AccountTokenCondition</a>]

---


### AccountTokenConditionRequestIpOutputReference <a name="AccountTokenConditionRequestIpOutputReference" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import account_token

accountToken.AccountTokenConditionRequestIpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.resetIn">reset_in</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.resetNotIn">reset_not_in</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_in` <a name="reset_in" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.resetIn"></a>

```python
def reset_in() -> None
```

##### `reset_not_in` <a name="reset_not_in" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.resetNotIn"></a>

```python
def reset_not_in() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.property.inInput">in_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.property.notInInput">not_in_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.property.in">in</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.property.notIn">not_in</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIp">AccountTokenConditionRequestIp</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `in_input`<sup>Optional</sup> <a name="in_input" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.property.inInput"></a>

```python
in_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `not_in_input`<sup>Optional</sup> <a name="not_in_input" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.property.notInInput"></a>

```python
not_in_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `in`<sup>Required</sup> <a name="in" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.property.in"></a>

```python
in: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `not_in`<sup>Required</sup> <a name="not_in" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.property.notIn"></a>

```python
not_in: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIpOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccountTokenConditionRequestIp]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenConditionRequestIp">AccountTokenConditionRequestIp</a>]

---


### AccountTokenPoliciesList <a name="AccountTokenPoliciesList" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import account_token

accountToken.AccountTokenPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccountTokenPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPolicies">AccountTokenPolicies</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccountTokenPolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPolicies">AccountTokenPolicies</a>]]

---


### AccountTokenPoliciesOutputReference <a name="AccountTokenPoliciesOutputReference" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import account_token

accountToken.AccountTokenPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.putPermissionGroups">put_permission_groups</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_permission_groups` <a name="put_permission_groups" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.putPermissionGroups"></a>

```python
def put_permission_groups(
  value: typing.Union[IResolvable, typing.List[AccountTokenPoliciesPermissionGroups]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.putPermissionGroups.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroups">AccountTokenPoliciesPermissionGroups</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.property.permissionGroups">permission_groups</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList">AccountTokenPoliciesPermissionGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.property.effectInput">effect_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.property.permissionGroupsInput">permission_groups_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroups">AccountTokenPoliciesPermissionGroups</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.property.resourcesInput">resources_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.property.effect">effect</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.property.resources">resources</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPolicies">AccountTokenPolicies</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `permission_groups`<sup>Required</sup> <a name="permission_groups" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.property.permissionGroups"></a>

```python
permission_groups: AccountTokenPoliciesPermissionGroupsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList">AccountTokenPoliciesPermissionGroupsList</a>

---

##### `effect_input`<sup>Optional</sup> <a name="effect_input" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.property.effectInput"></a>

```python
effect_input: str
```

- *Type:* str

---

##### `permission_groups_input`<sup>Optional</sup> <a name="permission_groups_input" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.property.permissionGroupsInput"></a>

```python
permission_groups_input: typing.Union[IResolvable, typing.List[AccountTokenPoliciesPermissionGroups]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroups">AccountTokenPoliciesPermissionGroups</a>]]

---

##### `resources_input`<sup>Optional</sup> <a name="resources_input" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.property.resourcesInput"></a>

```python
resources_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.property.effect"></a>

```python
effect: str
```

- *Type:* str

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.property.resources"></a>

```python
resources: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccountTokenPolicies]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPolicies">AccountTokenPolicies</a>]

---


### AccountTokenPoliciesPermissionGroupsList <a name="AccountTokenPoliciesPermissionGroupsList" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import account_token

accountToken.AccountTokenPoliciesPermissionGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccountTokenPoliciesPermissionGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroups">AccountTokenPoliciesPermissionGroups</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccountTokenPoliciesPermissionGroups]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroups">AccountTokenPoliciesPermissionGroups</a>]]

---


### AccountTokenPoliciesPermissionGroupsMetaOutputReference <a name="AccountTokenPoliciesPermissionGroupsMetaOutputReference" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import account_token

accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMeta">AccountTokenPoliciesPermissionGroupsMeta</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccountTokenPoliciesPermissionGroupsMeta]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMeta">AccountTokenPoliciesPermissionGroupsMeta</a>]

---


### AccountTokenPoliciesPermissionGroupsOutputReference <a name="AccountTokenPoliciesPermissionGroupsOutputReference" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import account_token

accountToken.AccountTokenPoliciesPermissionGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.putMeta">put_meta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.resetMeta">reset_meta</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_meta` <a name="put_meta" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.putMeta"></a>

```python
def put_meta(
  key: str = None,
  value: str = None
) -> None
```

###### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.putMeta.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/account_token#key AccountToken#key}.

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.putMeta.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/account_token#value AccountToken#value}.

---

##### `reset_meta` <a name="reset_meta" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.resetMeta"></a>

```python
def reset_meta() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.property.meta">meta</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference">AccountTokenPoliciesPermissionGroupsMetaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.property.metaInput">meta_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMeta">AccountTokenPoliciesPermissionGroupsMeta</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroups">AccountTokenPoliciesPermissionGroups</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.property.meta"></a>

```python
meta: AccountTokenPoliciesPermissionGroupsMetaOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMetaOutputReference">AccountTokenPoliciesPermissionGroupsMetaOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `meta_input`<sup>Optional</sup> <a name="meta_input" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.property.metaInput"></a>

```python
meta_input: typing.Union[IResolvable, AccountTokenPoliciesPermissionGroupsMeta]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsMeta">AccountTokenPoliciesPermissionGroupsMeta</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroupsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccountTokenPoliciesPermissionGroups]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accountToken.AccountTokenPoliciesPermissionGroups">AccountTokenPoliciesPermissionGroups</a>]

---



