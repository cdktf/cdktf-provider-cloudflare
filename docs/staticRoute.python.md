# `staticRoute` Submodule <a name="`staticRoute` Submodule" id="@cdktf/provider-cloudflare.staticRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StaticRoute <a name="StaticRoute" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute"></a>

Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/static_route cloudflare_static_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import static_route

staticRoute.StaticRoute(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  nexthop: str,
  prefix: str,
  priority: typing.Union[int, float],
  account_id: str = None,
  colo_names: typing.List[str] = None,
  colo_regions: typing.List[str] = None,
  description: str = None,
  id: str = None,
  weight: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.Initializer.parameter.nexthop">nexthop</a></code> | <code>str</code> | The nexthop IP address where traffic will be routed to. |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.Initializer.parameter.prefix">prefix</a></code> | <code>str</code> | Your network prefix using CIDR notation. |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | The priority for the static route. |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.Initializer.parameter.coloNames">colo_names</a></code> | <code>typing.List[str]</code> | List of Cloudflare colocation regions for this static route. |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.Initializer.parameter.coloRegions">colo_regions</a></code> | <code>typing.List[str]</code> | List of Cloudflare colocation names for this static route. |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the static route. |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/static_route#id StaticRoute#id}. |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.Initializer.parameter.weight">weight</a></code> | <code>typing.Union[int, float]</code> | The optional weight for ECMP routes. **Modifying this attribute will force creation of a new resource.**. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `nexthop`<sup>Required</sup> <a name="nexthop" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.Initializer.parameter.nexthop"></a>

- *Type:* str

The nexthop IP address where traffic will be routed to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/static_route#nexthop StaticRoute#nexthop}

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.Initializer.parameter.prefix"></a>

- *Type:* str

Your network prefix using CIDR notation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/static_route#prefix StaticRoute#prefix}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

The priority for the static route.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/static_route#priority StaticRoute#priority}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.Initializer.parameter.accountId"></a>

- *Type:* str

The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/static_route#account_id StaticRoute#account_id}

---

##### `colo_names`<sup>Optional</sup> <a name="colo_names" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.Initializer.parameter.coloNames"></a>

- *Type:* typing.List[str]

List of Cloudflare colocation regions for this static route.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/static_route#colo_names StaticRoute#colo_names}

---

##### `colo_regions`<sup>Optional</sup> <a name="colo_regions" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.Initializer.parameter.coloRegions"></a>

- *Type:* typing.List[str]

List of Cloudflare colocation names for this static route.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/static_route#colo_regions StaticRoute#colo_regions}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.Initializer.parameter.description"></a>

- *Type:* str

Description of the static route.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/static_route#description StaticRoute#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/static_route#id StaticRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.Initializer.parameter.weight"></a>

- *Type:* typing.Union[int, float]

The optional weight for ECMP routes. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/static_route#weight StaticRoute#weight}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.resetColoNames">reset_colo_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.resetColoRegions">reset_colo_regions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.resetWeight">reset_weight</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_colo_names` <a name="reset_colo_names" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.resetColoNames"></a>

```python
def reset_colo_names() -> None
```

##### `reset_colo_regions` <a name="reset_colo_regions" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.resetColoRegions"></a>

```python
def reset_colo_regions() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_weight` <a name="reset_weight" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.resetWeight"></a>

```python
def reset_weight() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import static_route

staticRoute.StaticRoute.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import static_route

staticRoute.StaticRoute.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import static_route

staticRoute.StaticRoute.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.coloNamesInput">colo_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.coloRegionsInput">colo_regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.nexthopInput">nexthop_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.coloNames">colo_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.coloRegions">colo_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.nexthop">nexthop</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `colo_names_input`<sup>Optional</sup> <a name="colo_names_input" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.coloNamesInput"></a>

```python
colo_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `colo_regions_input`<sup>Optional</sup> <a name="colo_regions_input" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.coloRegionsInput"></a>

```python
colo_regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `nexthop_input`<sup>Optional</sup> <a name="nexthop_input" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.nexthopInput"></a>

```python
nexthop_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `colo_names`<sup>Required</sup> <a name="colo_names" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.coloNames"></a>

```python
colo_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `colo_regions`<sup>Required</sup> <a name="colo_regions" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.coloRegions"></a>

```python
colo_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `nexthop`<sup>Required</sup> <a name="nexthop" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.nexthop"></a>

```python
nexthop: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.staticRoute.StaticRoute.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StaticRouteConfig <a name="StaticRouteConfig" id="@cdktf/provider-cloudflare.staticRoute.StaticRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.staticRoute.StaticRouteConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import static_route

staticRoute.StaticRouteConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  nexthop: str,
  prefix: str,
  priority: typing.Union[int, float],
  account_id: str = None,
  colo_names: typing.List[str] = None,
  colo_regions: typing.List[str] = None,
  description: str = None,
  id: str = None,
  weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRouteConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRouteConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRouteConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRouteConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRouteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRouteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRouteConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRouteConfig.property.nexthop">nexthop</a></code> | <code>str</code> | The nexthop IP address where traffic will be routed to. |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRouteConfig.property.prefix">prefix</a></code> | <code>str</code> | Your network prefix using CIDR notation. |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRouteConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | The priority for the static route. |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRouteConfig.property.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRouteConfig.property.coloNames">colo_names</a></code> | <code>typing.List[str]</code> | List of Cloudflare colocation regions for this static route. |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRouteConfig.property.coloRegions">colo_regions</a></code> | <code>typing.List[str]</code> | List of Cloudflare colocation names for this static route. |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRouteConfig.property.description">description</a></code> | <code>str</code> | Description of the static route. |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRouteConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/static_route#id StaticRoute#id}. |
| <code><a href="#@cdktf/provider-cloudflare.staticRoute.StaticRouteConfig.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | The optional weight for ECMP routes. **Modifying this attribute will force creation of a new resource.**. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.staticRoute.StaticRouteConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.staticRoute.StaticRouteConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.staticRoute.StaticRouteConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.staticRoute.StaticRouteConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.staticRoute.StaticRouteConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.staticRoute.StaticRouteConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.staticRoute.StaticRouteConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `nexthop`<sup>Required</sup> <a name="nexthop" id="@cdktf/provider-cloudflare.staticRoute.StaticRouteConfig.property.nexthop"></a>

```python
nexthop: str
```

- *Type:* str

The nexthop IP address where traffic will be routed to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/static_route#nexthop StaticRoute#nexthop}

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-cloudflare.staticRoute.StaticRouteConfig.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Your network prefix using CIDR notation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/static_route#prefix StaticRoute#prefix}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.staticRoute.StaticRouteConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The priority for the static route.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/static_route#priority StaticRoute#priority}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-cloudflare.staticRoute.StaticRouteConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/static_route#account_id StaticRoute#account_id}

---

##### `colo_names`<sup>Optional</sup> <a name="colo_names" id="@cdktf/provider-cloudflare.staticRoute.StaticRouteConfig.property.coloNames"></a>

```python
colo_names: typing.List[str]
```

- *Type:* typing.List[str]

List of Cloudflare colocation regions for this static route.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/static_route#colo_names StaticRoute#colo_names}

---

##### `colo_regions`<sup>Optional</sup> <a name="colo_regions" id="@cdktf/provider-cloudflare.staticRoute.StaticRouteConfig.property.coloRegions"></a>

```python
colo_regions: typing.List[str]
```

- *Type:* typing.List[str]

List of Cloudflare colocation names for this static route.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/static_route#colo_regions StaticRoute#colo_regions}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.staticRoute.StaticRouteConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the static route.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/static_route#description StaticRoute#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.staticRoute.StaticRouteConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/static_route#id StaticRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-cloudflare.staticRoute.StaticRouteConfig.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The optional weight for ECMP routes. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/static_route#weight StaticRoute#weight}

---



