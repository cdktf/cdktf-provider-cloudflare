# `dataCloudflareZeroTrustNetworkHostnameRoute` Submodule <a name="`dataCloudflareZeroTrustNetworkHostnameRoute` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustNetworkHostnameRoute <a name="DataCloudflareZeroTrustNetworkHostnameRoute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_network_hostname_route cloudflare_zero_trust_network_hostname_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarezerotrustnetworkhostnameroute"

datacloudflarezerotrustnetworkhostnameroute.NewDataCloudflareZeroTrustNetworkHostnameRoute(scope Construct, id *string, config DataCloudflareZeroTrustNetworkHostnameRouteConfig) DataCloudflareZeroTrustNetworkHostnameRoute
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig">DataCloudflareZeroTrustNetworkHostnameRouteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig">DataCloudflareZeroTrustNetworkHostnameRouteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.resetHostnameRouteId">ResetHostnameRouteId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.putFilter"></a>

```go
func PutFilter(value DataCloudflareZeroTrustNetworkHostnameRouteFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter">DataCloudflareZeroTrustNetworkHostnameRouteFilter</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetHostnameRouteId` <a name="ResetHostnameRouteId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.resetHostnameRouteId"></a>

```go
func ResetHostnameRouteId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustNetworkHostnameRoute resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarezerotrustnetworkhostnameroute"

datacloudflarezerotrustnetworkhostnameroute.DataCloudflareZeroTrustNetworkHostnameRoute_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarezerotrustnetworkhostnameroute"

datacloudflarezerotrustnetworkhostnameroute.DataCloudflareZeroTrustNetworkHostnameRoute_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarezerotrustnetworkhostnameroute"

datacloudflarezerotrustnetworkhostnameroute.DataCloudflareZeroTrustNetworkHostnameRoute_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarezerotrustnetworkhostnameroute"

datacloudflarezerotrustnetworkhostnameroute.DataCloudflareZeroTrustNetworkHostnameRoute_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflareZeroTrustNetworkHostnameRoute resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareZeroTrustNetworkHostnameRoute to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareZeroTrustNetworkHostnameRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_network_hostname_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustNetworkHostnameRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.deletedAt">DeletedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference">DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.tunnelId">TunnelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.tunnelName">TunnelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.hostnameRouteIdInput">HostnameRouteIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.hostnameRouteId">HostnameRouteId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DeletedAt`<sup>Required</sup> <a name="DeletedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.deletedAt"></a>

```go
func DeletedAt() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.filter"></a>

```go
func Filter() DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference">DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference</a>

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.tunnelId"></a>

```go
func TunnelId() *string
```

- *Type:* *string

---

##### `TunnelName`<sup>Required</sup> <a name="TunnelName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.tunnelName"></a>

```go
func TunnelName() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `HostnameRouteIdInput`<sup>Optional</sup> <a name="HostnameRouteIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.hostnameRouteIdInput"></a>

```go
func HostnameRouteIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `HostnameRouteId`<sup>Required</sup> <a name="HostnameRouteId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.hostnameRouteId"></a>

```go
func HostnameRouteId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustNetworkHostnameRouteConfig <a name="DataCloudflareZeroTrustNetworkHostnameRouteConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarezerotrustnetworkhostnameroute"

&datacloudflarezerotrustnetworkhostnameroute.DataCloudflareZeroTrustNetworkHostnameRouteConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Filter: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter,
	HostnameRouteId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Cloudflare account ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter">DataCloudflareZeroTrustNetworkHostnameRouteFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_network_hostname_route#filter DataCloudflareZeroTrustNetworkHostnameRoute#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.hostnameRouteId">HostnameRouteId</a></code> | <code>*string</code> | The hostname route ID. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Cloudflare account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_network_hostname_route#account_id DataCloudflareZeroTrustNetworkHostnameRoute#account_id}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.filter"></a>

```go
Filter DataCloudflareZeroTrustNetworkHostnameRouteFilter
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter">DataCloudflareZeroTrustNetworkHostnameRouteFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_network_hostname_route#filter DataCloudflareZeroTrustNetworkHostnameRoute#filter}.

---

##### `HostnameRouteId`<sup>Optional</sup> <a name="HostnameRouteId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.hostnameRouteId"></a>

```go
HostnameRouteId *string
```

- *Type:* *string

The hostname route ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_network_hostname_route#hostname_route_id DataCloudflareZeroTrustNetworkHostnameRoute#hostname_route_id}

---

### DataCloudflareZeroTrustNetworkHostnameRouteFilter <a name="DataCloudflareZeroTrustNetworkHostnameRouteFilter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarezerotrustnetworkhostnameroute"

&datacloudflarezerotrustnetworkhostnameroute.DataCloudflareZeroTrustNetworkHostnameRouteFilter {
	Comment: *string,
	ExistedAt: *string,
	Hostname: *string,
	Id: *string,
	IsDeleted: interface{},
	TunnelId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter.property.comment">Comment</a></code> | <code>*string</code> | If set, only list hostname routes with the given comment. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter.property.existedAt">ExistedAt</a></code> | <code>*string</code> | If provided, include only resources that were created (and not deleted) before this time. URL encoded. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter.property.hostname">Hostname</a></code> | <code>*string</code> | If set, only list hostname routes that contain a substring of the given value, the filter is case-insensitive. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter.property.id">Id</a></code> | <code>*string</code> | The hostname route ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter.property.isDeleted">IsDeleted</a></code> | <code>interface{}</code> | If `true`, only return deleted hostname routes. If `false`, exclude deleted hostname routes. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter.property.tunnelId">TunnelId</a></code> | <code>*string</code> | If set, only list hostname routes that point to a specific tunnel. |

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

If set, only list hostname routes with the given comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_network_hostname_route#comment DataCloudflareZeroTrustNetworkHostnameRoute#comment}

---

##### `ExistedAt`<sup>Optional</sup> <a name="ExistedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter.property.existedAt"></a>

```go
ExistedAt *string
```

- *Type:* *string

If provided, include only resources that were created (and not deleted) before this time. URL encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_network_hostname_route#existed_at DataCloudflareZeroTrustNetworkHostnameRoute#existed_at}

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

If set, only list hostname routes that contain a substring of the given value, the filter is case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_network_hostname_route#hostname DataCloudflareZeroTrustNetworkHostnameRoute#hostname}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter.property.id"></a>

```go
Id *string
```

- *Type:* *string

The hostname route ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_network_hostname_route#id DataCloudflareZeroTrustNetworkHostnameRoute#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsDeleted`<sup>Optional</sup> <a name="IsDeleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter.property.isDeleted"></a>

```go
IsDeleted interface{}
```

- *Type:* interface{}

If `true`, only return deleted hostname routes. If `false`, exclude deleted hostname routes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_network_hostname_route#is_deleted DataCloudflareZeroTrustNetworkHostnameRoute#is_deleted}

---

##### `TunnelId`<sup>Optional</sup> <a name="TunnelId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter.property.tunnelId"></a>

```go
TunnelId *string
```

- *Type:* *string

If set, only list hostname routes that point to a specific tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_network_hostname_route#tunnel_id DataCloudflareZeroTrustNetworkHostnameRoute#tunnel_id}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference <a name="DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarezerotrustnetworkhostnameroute"

datacloudflarezerotrustnetworkhostnameroute.NewDataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.resetExistedAt">ResetExistedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.resetHostname">ResetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.resetIsDeleted">ResetIsDeleted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.resetTunnelId">ResetTunnelId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.resetComment"></a>

```go
func ResetComment()
```

##### `ResetExistedAt` <a name="ResetExistedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.resetExistedAt"></a>

```go
func ResetExistedAt()
```

##### `ResetHostname` <a name="ResetHostname" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.resetHostname"></a>

```go
func ResetHostname()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetIsDeleted` <a name="ResetIsDeleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.resetIsDeleted"></a>

```go
func ResetIsDeleted()
```

##### `ResetTunnelId` <a name="ResetTunnelId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.resetTunnelId"></a>

```go
func ResetTunnelId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.existedAtInput">ExistedAtInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.isDeletedInput">IsDeletedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.tunnelIdInput">TunnelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.existedAt">ExistedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.isDeleted">IsDeleted</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.tunnelId">TunnelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `ExistedAtInput`<sup>Optional</sup> <a name="ExistedAtInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.existedAtInput"></a>

```go
func ExistedAtInput() *string
```

- *Type:* *string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsDeletedInput`<sup>Optional</sup> <a name="IsDeletedInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.isDeletedInput"></a>

```go
func IsDeletedInput() interface{}
```

- *Type:* interface{}

---

##### `TunnelIdInput`<sup>Optional</sup> <a name="TunnelIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.tunnelIdInput"></a>

```go
func TunnelIdInput() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `ExistedAt`<sup>Required</sup> <a name="ExistedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.existedAt"></a>

```go
func ExistedAt() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsDeleted`<sup>Required</sup> <a name="IsDeleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.isDeleted"></a>

```go
func IsDeleted() interface{}
```

- *Type:* interface{}

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.tunnelId"></a>

```go
func TunnelId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



