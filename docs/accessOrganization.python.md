# `accessOrganization` Submodule <a name="`accessOrganization` Submodule" id="@cdktf/provider-cloudflare.accessOrganization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessOrganization <a name="AccessOrganization" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization"></a>

Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/access_organization cloudflare_access_organization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_organization

accessOrganization.AccessOrganization(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  auth_domain: str,
  account_id: str = None,
  id: str = None,
  is_ui_read_only: typing.Union[bool, IResolvable] = None,
  login_design: typing.Union[IResolvable, typing.List[AccessOrganizationLoginDesign]] = None,
  name: str = None,
  user_seat_expiration_inactive_time: str = None,
  zone_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.authDomain">auth_domain</a></code> | <code>str</code> | The unique subdomain assigned to your Zero Trust organization. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. Conflicts with `zone_id`. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_organization#id AccessOrganization#id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.isUiReadOnly">is_ui_read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When set to true, this will disable all editing of Access resources via the Zero Trust Dashboard. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.loginDesign">login_design</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesign">AccessOrganizationLoginDesign</a>]]</code> | login_design block. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of your Zero Trust organization. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.userSeatExpirationInactiveTime">user_seat_expiration_inactive_time</a></code> | <code>str</code> | The amount of time a user seat is inactive before it expires. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | The zone identifier to target for the resource. Conflicts with `account_id`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auth_domain`<sup>Required</sup> <a name="auth_domain" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.authDomain"></a>

- *Type:* str

The unique subdomain assigned to your Zero Trust organization.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_organization#auth_domain AccessOrganization#auth_domain}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.accountId"></a>

- *Type:* str

The account identifier to target for the resource. Conflicts with `zone_id`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_organization#account_id AccessOrganization#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_organization#id AccessOrganization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_ui_read_only`<sup>Optional</sup> <a name="is_ui_read_only" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.isUiReadOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When set to true, this will disable all editing of Access resources via the Zero Trust Dashboard.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_organization#is_ui_read_only AccessOrganization#is_ui_read_only}

---

##### `login_design`<sup>Optional</sup> <a name="login_design" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.loginDesign"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesign">AccessOrganizationLoginDesign</a>]]

login_design block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_organization#login_design AccessOrganization#login_design}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.name"></a>

- *Type:* str

The name of your Zero Trust organization.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_organization#name AccessOrganization#name}

---

##### `user_seat_expiration_inactive_time`<sup>Optional</sup> <a name="user_seat_expiration_inactive_time" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.userSeatExpirationInactiveTime"></a>

- *Type:* str

The amount of time a user seat is inactive before it expires.

When the user seat exceeds the set time of inactivity, the user is removed as an active seat and no longer counts against your Teams seat count. Must be in the format `300ms` or `2h45m`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_organization#user_seat_expiration_inactive_time AccessOrganization#user_seat_expiration_inactive_time}

---

##### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.Initializer.parameter.zoneId"></a>

- *Type:* str

The zone identifier to target for the resource. Conflicts with `account_id`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_organization#zone_id AccessOrganization#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.putLoginDesign">put_login_design</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.resetIsUiReadOnly">reset_is_ui_read_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.resetLoginDesign">reset_login_design</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.resetUserSeatExpirationInactiveTime">reset_user_seat_expiration_inactive_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.resetZoneId">reset_zone_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_login_design` <a name="put_login_design" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.putLoginDesign"></a>

```python
def put_login_design(
  value: typing.Union[IResolvable, typing.List[AccessOrganizationLoginDesign]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.putLoginDesign.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesign">AccessOrganizationLoginDesign</a>]]

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_ui_read_only` <a name="reset_is_ui_read_only" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.resetIsUiReadOnly"></a>

```python
def reset_is_ui_read_only() -> None
```

##### `reset_login_design` <a name="reset_login_design" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.resetLoginDesign"></a>

```python
def reset_login_design() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_user_seat_expiration_inactive_time` <a name="reset_user_seat_expiration_inactive_time" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.resetUserSeatExpirationInactiveTime"></a>

```python
def reset_user_seat_expiration_inactive_time() -> None
```

##### `reset_zone_id` <a name="reset_zone_id" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.resetZoneId"></a>

```python
def reset_zone_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_organization

accessOrganization.AccessOrganization.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_organization

accessOrganization.AccessOrganization.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_organization

accessOrganization.AccessOrganization.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.loginDesign">login_design</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList">AccessOrganizationLoginDesignList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.authDomainInput">auth_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.isUiReadOnlyInput">is_ui_read_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.loginDesignInput">login_design_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesign">AccessOrganizationLoginDesign</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.userSeatExpirationInactiveTimeInput">user_seat_expiration_inactive_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.authDomain">auth_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.isUiReadOnly">is_ui_read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.userSeatExpirationInactiveTime">user_seat_expiration_inactive_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `login_design`<sup>Required</sup> <a name="login_design" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.loginDesign"></a>

```python
login_design: AccessOrganizationLoginDesignList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList">AccessOrganizationLoginDesignList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `auth_domain_input`<sup>Optional</sup> <a name="auth_domain_input" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.authDomainInput"></a>

```python
auth_domain_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_ui_read_only_input`<sup>Optional</sup> <a name="is_ui_read_only_input" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.isUiReadOnlyInput"></a>

```python
is_ui_read_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `login_design_input`<sup>Optional</sup> <a name="login_design_input" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.loginDesignInput"></a>

```python
login_design_input: typing.Union[IResolvable, typing.List[AccessOrganizationLoginDesign]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesign">AccessOrganizationLoginDesign</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `user_seat_expiration_inactive_time_input`<sup>Optional</sup> <a name="user_seat_expiration_inactive_time_input" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.userSeatExpirationInactiveTimeInput"></a>

```python
user_seat_expiration_inactive_time_input: str
```

- *Type:* str

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `auth_domain`<sup>Required</sup> <a name="auth_domain" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.authDomain"></a>

```python
auth_domain: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_ui_read_only`<sup>Required</sup> <a name="is_ui_read_only" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.isUiReadOnly"></a>

```python
is_ui_read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `user_seat_expiration_inactive_time`<sup>Required</sup> <a name="user_seat_expiration_inactive_time" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.userSeatExpirationInactiveTime"></a>

```python
user_seat_expiration_inactive_time: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganization.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AccessOrganizationConfig <a name="AccessOrganizationConfig" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_organization

accessOrganization.AccessOrganizationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  auth_domain: str,
  account_id: str = None,
  id: str = None,
  is_ui_read_only: typing.Union[bool, IResolvable] = None,
  login_design: typing.Union[IResolvable, typing.List[AccessOrganizationLoginDesign]] = None,
  name: str = None,
  user_seat_expiration_inactive_time: str = None,
  zone_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.authDomain">auth_domain</a></code> | <code>str</code> | The unique subdomain assigned to your Zero Trust organization. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. Conflicts with `zone_id`. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_organization#id AccessOrganization#id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.isUiReadOnly">is_ui_read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When set to true, this will disable all editing of Access resources via the Zero Trust Dashboard. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.loginDesign">login_design</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesign">AccessOrganizationLoginDesign</a>]]</code> | login_design block. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.name">name</a></code> | <code>str</code> | The name of your Zero Trust organization. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.userSeatExpirationInactiveTime">user_seat_expiration_inactive_time</a></code> | <code>str</code> | The amount of time a user seat is inactive before it expires. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.zoneId">zone_id</a></code> | <code>str</code> | The zone identifier to target for the resource. Conflicts with `account_id`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auth_domain`<sup>Required</sup> <a name="auth_domain" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.authDomain"></a>

```python
auth_domain: str
```

- *Type:* str

The unique subdomain assigned to your Zero Trust organization.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_organization#auth_domain AccessOrganization#auth_domain}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The account identifier to target for the resource. Conflicts with `zone_id`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_organization#account_id AccessOrganization#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_organization#id AccessOrganization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_ui_read_only`<sup>Optional</sup> <a name="is_ui_read_only" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.isUiReadOnly"></a>

```python
is_ui_read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When set to true, this will disable all editing of Access resources via the Zero Trust Dashboard.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_organization#is_ui_read_only AccessOrganization#is_ui_read_only}

---

##### `login_design`<sup>Optional</sup> <a name="login_design" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.loginDesign"></a>

```python
login_design: typing.Union[IResolvable, typing.List[AccessOrganizationLoginDesign]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesign">AccessOrganizationLoginDesign</a>]]

login_design block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_organization#login_design AccessOrganization#login_design}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of your Zero Trust organization.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_organization#name AccessOrganization#name}

---

##### `user_seat_expiration_inactive_time`<sup>Optional</sup> <a name="user_seat_expiration_inactive_time" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.userSeatExpirationInactiveTime"></a>

```python
user_seat_expiration_inactive_time: str
```

- *Type:* str

The amount of time a user seat is inactive before it expires.

When the user seat exceeds the set time of inactivity, the user is removed as an active seat and no longer counts against your Teams seat count. Must be in the format `300ms` or `2h45m`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_organization#user_seat_expiration_inactive_time AccessOrganization#user_seat_expiration_inactive_time}

---

##### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

The zone identifier to target for the resource. Conflicts with `account_id`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_organization#zone_id AccessOrganization#zone_id}

---

### AccessOrganizationLoginDesign <a name="AccessOrganizationLoginDesign" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesign"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesign.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_organization

accessOrganization.AccessOrganizationLoginDesign(
  background_color: str = None,
  footer_text: str = None,
  header_text: str = None,
  logo_path: str = None,
  text_color: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesign.property.backgroundColor">background_color</a></code> | <code>str</code> | The background color on the login page. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesign.property.footerText">footer_text</a></code> | <code>str</code> | The text at the bottom of the login page. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesign.property.headerText">header_text</a></code> | <code>str</code> | The text at the top of the login page. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesign.property.logoPath">logo_path</a></code> | <code>str</code> | The URL of the logo on the login page. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesign.property.textColor">text_color</a></code> | <code>str</code> | The text color on the login page. |

---

##### `background_color`<sup>Optional</sup> <a name="background_color" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesign.property.backgroundColor"></a>

```python
background_color: str
```

- *Type:* str

The background color on the login page.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_organization#background_color AccessOrganization#background_color}

---

##### `footer_text`<sup>Optional</sup> <a name="footer_text" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesign.property.footerText"></a>

```python
footer_text: str
```

- *Type:* str

The text at the bottom of the login page.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_organization#footer_text AccessOrganization#footer_text}

---

##### `header_text`<sup>Optional</sup> <a name="header_text" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesign.property.headerText"></a>

```python
header_text: str
```

- *Type:* str

The text at the top of the login page.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_organization#header_text AccessOrganization#header_text}

---

##### `logo_path`<sup>Optional</sup> <a name="logo_path" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesign.property.logoPath"></a>

```python
logo_path: str
```

- *Type:* str

The URL of the logo on the login page.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_organization#logo_path AccessOrganization#logo_path}

---

##### `text_color`<sup>Optional</sup> <a name="text_color" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesign.property.textColor"></a>

```python
text_color: str
```

- *Type:* str

The text color on the login page.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/access_organization#text_color AccessOrganization#text_color}

---

## Classes <a name="Classes" id="Classes"></a>

### AccessOrganizationLoginDesignList <a name="AccessOrganizationLoginDesignList" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_organization

accessOrganization.AccessOrganizationLoginDesignList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessOrganizationLoginDesignOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesign">AccessOrganizationLoginDesign</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessOrganizationLoginDesign]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesign">AccessOrganizationLoginDesign</a>]]

---


### AccessOrganizationLoginDesignOutputReference <a name="AccessOrganizationLoginDesignOutputReference" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_organization

accessOrganization.AccessOrganizationLoginDesignOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.resetBackgroundColor">reset_background_color</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.resetFooterText">reset_footer_text</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.resetHeaderText">reset_header_text</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.resetLogoPath">reset_logo_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.resetTextColor">reset_text_color</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_background_color` <a name="reset_background_color" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.resetBackgroundColor"></a>

```python
def reset_background_color() -> None
```

##### `reset_footer_text` <a name="reset_footer_text" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.resetFooterText"></a>

```python
def reset_footer_text() -> None
```

##### `reset_header_text` <a name="reset_header_text" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.resetHeaderText"></a>

```python
def reset_header_text() -> None
```

##### `reset_logo_path` <a name="reset_logo_path" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.resetLogoPath"></a>

```python
def reset_logo_path() -> None
```

##### `reset_text_color` <a name="reset_text_color" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.resetTextColor"></a>

```python
def reset_text_color() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.backgroundColorInput">background_color_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.footerTextInput">footer_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.headerTextInput">header_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.logoPathInput">logo_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.textColorInput">text_color_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.backgroundColor">background_color</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.footerText">footer_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.headerText">header_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.logoPath">logo_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.textColor">text_color</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesign">AccessOrganizationLoginDesign</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `background_color_input`<sup>Optional</sup> <a name="background_color_input" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.backgroundColorInput"></a>

```python
background_color_input: str
```

- *Type:* str

---

##### `footer_text_input`<sup>Optional</sup> <a name="footer_text_input" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.footerTextInput"></a>

```python
footer_text_input: str
```

- *Type:* str

---

##### `header_text_input`<sup>Optional</sup> <a name="header_text_input" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.headerTextInput"></a>

```python
header_text_input: str
```

- *Type:* str

---

##### `logo_path_input`<sup>Optional</sup> <a name="logo_path_input" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.logoPathInput"></a>

```python
logo_path_input: str
```

- *Type:* str

---

##### `text_color_input`<sup>Optional</sup> <a name="text_color_input" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.textColorInput"></a>

```python
text_color_input: str
```

- *Type:* str

---

##### `background_color`<sup>Required</sup> <a name="background_color" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.backgroundColor"></a>

```python
background_color: str
```

- *Type:* str

---

##### `footer_text`<sup>Required</sup> <a name="footer_text" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.footerText"></a>

```python
footer_text: str
```

- *Type:* str

---

##### `header_text`<sup>Required</sup> <a name="header_text" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.headerText"></a>

```python
header_text: str
```

- *Type:* str

---

##### `logo_path`<sup>Required</sup> <a name="logo_path" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.logoPath"></a>

```python
logo_path: str
```

- *Type:* str

---

##### `text_color`<sup>Required</sup> <a name="text_color" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.textColor"></a>

```python
text_color: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesignOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AccessOrganizationLoginDesign, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-cloudflare.accessOrganization.AccessOrganizationLoginDesign">AccessOrganizationLoginDesign</a>, cdktf.IResolvable]

---


