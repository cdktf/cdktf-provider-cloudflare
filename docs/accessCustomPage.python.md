# `cloudflare_access_custom_page`

Refer to the Terraform Registory for docs: [`cloudflare_access_custom_page`](https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/access_custom_page).

# `accessCustomPage` Submodule <a name="`accessCustomPage` Submodule" id="@cdktf/provider-cloudflare.accessCustomPage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessCustomPage <a name="AccessCustomPage" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/access_custom_page cloudflare_access_custom_page}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_custom_page

accessCustomPage.AccessCustomPage(
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
  account_id: str = None,
  app_count: typing.Union[int, float] = None,
  custom_html: str = None,
  id: str = None,
  zone_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.name">name</a></code> | <code>str</code> | Friendly name of the Access Custom Page configuration. |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.type">type</a></code> | <code>str</code> | Type of Access custom page to create. Available values: `identity_denied`, `forbidden`. |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.appCount">app_count</a></code> | <code>typing.Union[int, float]</code> | Number of apps to display on the custom page. |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.customHtml">custom_html</a></code> | <code>str</code> | Custom HTML to display on the custom page. |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/access_custom_page#id AccessCustomPage#id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | The zone identifier to target for the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.name"></a>

- *Type:* str

Friendly name of the Access Custom Page configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/access_custom_page#name AccessCustomPage#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.type"></a>

- *Type:* str

Type of Access custom page to create. Available values: `identity_denied`, `forbidden`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/access_custom_page#type AccessCustomPage#type}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.accountId"></a>

- *Type:* str

The account identifier to target for the resource.

Conflicts with `zone_id`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/access_custom_page#account_id AccessCustomPage#account_id}

---

##### `app_count`<sup>Optional</sup> <a name="app_count" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.appCount"></a>

- *Type:* typing.Union[int, float]

Number of apps to display on the custom page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/access_custom_page#app_count AccessCustomPage#app_count}

---

##### `custom_html`<sup>Optional</sup> <a name="custom_html" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.customHtml"></a>

- *Type:* str

Custom HTML to display on the custom page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/access_custom_page#custom_html AccessCustomPage#custom_html}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/access_custom_page#id AccessCustomPage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.Initializer.parameter.zoneId"></a>

- *Type:* str

The zone identifier to target for the resource.

Conflicts with `account_id`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/access_custom_page#zone_id AccessCustomPage#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.resetAppCount">reset_app_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.resetCustomHtml">reset_custom_html</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.resetZoneId">reset_zone_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_app_count` <a name="reset_app_count" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.resetAppCount"></a>

```python
def reset_app_count() -> None
```

##### `reset_custom_html` <a name="reset_custom_html" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.resetCustomHtml"></a>

```python
def reset_custom_html() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_zone_id` <a name="reset_zone_id" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.resetZoneId"></a>

```python
def reset_zone_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AccessCustomPage resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_custom_page

accessCustomPage.AccessCustomPage.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_custom_page

accessCustomPage.AccessCustomPage.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_custom_page

accessCustomPage.AccessCustomPage.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_custom_page

accessCustomPage.AccessCustomPage.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AccessCustomPage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AccessCustomPage to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AccessCustomPage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/access_custom_page#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AccessCustomPage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.appCountInput">app_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.customHtmlInput">custom_html_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.appCount">app_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.customHtml">custom_html</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `app_count_input`<sup>Optional</sup> <a name="app_count_input" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.appCountInput"></a>

```python
app_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `custom_html_input`<sup>Optional</sup> <a name="custom_html_input" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.customHtmlInput"></a>

```python
custom_html_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `app_count`<sup>Required</sup> <a name="app_count" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.appCount"></a>

```python
app_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `custom_html`<sup>Required</sup> <a name="custom_html" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.customHtml"></a>

```python
custom_html: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPage.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AccessCustomPageConfig <a name="AccessCustomPageConfig" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_custom_page

accessCustomPage.AccessCustomPageConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  type: str,
  account_id: str = None,
  app_count: typing.Union[int, float] = None,
  custom_html: str = None,
  id: str = None,
  zone_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.name">name</a></code> | <code>str</code> | Friendly name of the Access Custom Page configuration. |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.type">type</a></code> | <code>str</code> | Type of Access custom page to create. Available values: `identity_denied`, `forbidden`. |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.appCount">app_count</a></code> | <code>typing.Union[int, float]</code> | Number of apps to display on the custom page. |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.customHtml">custom_html</a></code> | <code>str</code> | Custom HTML to display on the custom page. |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/access_custom_page#id AccessCustomPage#id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.zoneId">zone_id</a></code> | <code>str</code> | The zone identifier to target for the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Friendly name of the Access Custom Page configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/access_custom_page#name AccessCustomPage#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Type of Access custom page to create. Available values: `identity_denied`, `forbidden`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/access_custom_page#type AccessCustomPage#type}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The account identifier to target for the resource.

Conflicts with `zone_id`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/access_custom_page#account_id AccessCustomPage#account_id}

---

##### `app_count`<sup>Optional</sup> <a name="app_count" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.appCount"></a>

```python
app_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of apps to display on the custom page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/access_custom_page#app_count AccessCustomPage#app_count}

---

##### `custom_html`<sup>Optional</sup> <a name="custom_html" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.customHtml"></a>

```python
custom_html: str
```

- *Type:* str

Custom HTML to display on the custom page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/access_custom_page#custom_html AccessCustomPage#custom_html}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/access_custom_page#id AccessCustomPage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.accessCustomPage.AccessCustomPageConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

The zone identifier to target for the resource.

Conflicts with `account_id`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.17.0/docs/resources/access_custom_page#zone_id AccessCustomPage#zone_id}

---



