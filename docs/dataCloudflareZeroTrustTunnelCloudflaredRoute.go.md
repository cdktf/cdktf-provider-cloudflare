# `dataCloudflareZeroTrustTunnelCloudflaredRoute` Submodule <a name="`dataCloudflareZeroTrustTunnelCloudflaredRoute` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustTunnelCloudflaredRoute <a name="DataCloudflareZeroTrustTunnelCloudflaredRoute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zero_trust_tunnel_cloudflared_route cloudflare_zero_trust_tunnel_cloudflared_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarezerotrusttunnelcloudflaredroute"

datacloudflarezerotrusttunnelcloudflaredroute.NewDataCloudflareZeroTrustTunnelCloudflaredRoute(scope Construct, id *string, config DataCloudflareZeroTrustTunnelCloudflaredRouteConfig) DataCloudflareZeroTrustTunnelCloudflaredRoute
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteConfig">DataCloudflareZeroTrustTunnelCloudflaredRouteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteConfig">DataCloudflareZeroTrustTunnelCloudflaredRouteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.resetRouteId">ResetRouteId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.putFilter"></a>

```go
func PutFilter(value DataCloudflareZeroTrustTunnelCloudflaredRouteFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilter">DataCloudflareZeroTrustTunnelCloudflaredRouteFilter</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetRouteId` <a name="ResetRouteId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.resetRouteId"></a>

```go
func ResetRouteId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelCloudflaredRoute resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarezerotrusttunnelcloudflaredroute"

datacloudflarezerotrusttunnelcloudflaredroute.DataCloudflareZeroTrustTunnelCloudflaredRoute_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarezerotrusttunnelcloudflaredroute"

datacloudflarezerotrusttunnelcloudflaredroute.DataCloudflareZeroTrustTunnelCloudflaredRoute_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarezerotrusttunnelcloudflaredroute"

datacloudflarezerotrusttunnelcloudflaredroute.DataCloudflareZeroTrustTunnelCloudflaredRoute_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarezerotrusttunnelcloudflaredroute"

datacloudflarezerotrusttunnelcloudflaredroute.DataCloudflareZeroTrustTunnelCloudflaredRoute_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelCloudflaredRoute resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareZeroTrustTunnelCloudflaredRoute to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareZeroTrustTunnelCloudflaredRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zero_trust_tunnel_cloudflared_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustTunnelCloudflaredRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.deletedAt">DeletedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference">DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.tunnelId">TunnelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.routeIdInput">RouteIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.routeId">RouteId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DeletedAt`<sup>Required</sup> <a name="DeletedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.deletedAt"></a>

```go
func DeletedAt() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.filter"></a>

```go
func Filter() DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference">DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.tunnelId"></a>

```go
func TunnelId() *string
```

- *Type:* *string

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.virtualNetworkId"></a>

```go
func VirtualNetworkId() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `RouteIdInput`<sup>Optional</sup> <a name="RouteIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.routeIdInput"></a>

```go
func RouteIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `RouteId`<sup>Required</sup> <a name="RouteId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.routeId"></a>

```go
func RouteId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRoute.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustTunnelCloudflaredRouteConfig <a name="DataCloudflareZeroTrustTunnelCloudflaredRouteConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarezerotrusttunnelcloudflaredroute"

&datacloudflarezerotrusttunnelcloudflaredroute.DataCloudflareZeroTrustTunnelCloudflaredRouteConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Filter: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilter,
	RouteId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Cloudflare account ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteConfig.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilter">DataCloudflareZeroTrustTunnelCloudflaredRouteFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zero_trust_tunnel_cloudflared_route#filter DataCloudflareZeroTrustTunnelCloudflaredRoute#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteConfig.property.routeId">RouteId</a></code> | <code>*string</code> | UUID of the route. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Cloudflare account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zero_trust_tunnel_cloudflared_route#account_id DataCloudflareZeroTrustTunnelCloudflaredRoute#account_id}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteConfig.property.filter"></a>

```go
Filter DataCloudflareZeroTrustTunnelCloudflaredRouteFilter
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilter">DataCloudflareZeroTrustTunnelCloudflaredRouteFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zero_trust_tunnel_cloudflared_route#filter DataCloudflareZeroTrustTunnelCloudflaredRoute#filter}.

---

##### `RouteId`<sup>Optional</sup> <a name="RouteId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteConfig.property.routeId"></a>

```go
RouteId *string
```

- *Type:* *string

UUID of the route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zero_trust_tunnel_cloudflared_route#route_id DataCloudflareZeroTrustTunnelCloudflaredRoute#route_id}

---

### DataCloudflareZeroTrustTunnelCloudflaredRouteFilter <a name="DataCloudflareZeroTrustTunnelCloudflaredRouteFilter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarezerotrusttunnelcloudflaredroute"

&datacloudflarezerotrusttunnelcloudflaredroute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilter {
	Comment: *string,
	ExistedAt: *string,
	IsDeleted: interface{},
	NetworkSubset: *string,
	NetworkSuperset: *string,
	RouteId: *string,
	TunnelId: *string,
	TunTypes: *string,
	VirtualNetworkId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilter.property.comment">Comment</a></code> | <code>*string</code> | Optional remark describing the route. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilter.property.existedAt">ExistedAt</a></code> | <code>*string</code> | If provided, include only tunnels that were created (and not deleted) before this time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilter.property.isDeleted">IsDeleted</a></code> | <code>interface{}</code> | If `true`, only include deleted routes. If `false`, exclude deleted routes. If empty, all routes will be included. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilter.property.networkSubset">NetworkSubset</a></code> | <code>*string</code> | If set, only list routes that are contained within this IP range. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilter.property.networkSuperset">NetworkSuperset</a></code> | <code>*string</code> | If set, only list routes that contain this IP range. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilter.property.routeId">RouteId</a></code> | <code>*string</code> | UUID of the route. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilter.property.tunnelId">TunnelId</a></code> | <code>*string</code> | UUID of the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilter.property.tunTypes">TunTypes</a></code> | <code>*string</code> | The types of tunnels to filter separated by a comma. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilter.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>*string</code> | UUID of the virtual network. |

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilter.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Optional remark describing the route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zero_trust_tunnel_cloudflared_route#comment DataCloudflareZeroTrustTunnelCloudflaredRoute#comment}

---

##### `ExistedAt`<sup>Optional</sup> <a name="ExistedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilter.property.existedAt"></a>

```go
ExistedAt *string
```

- *Type:* *string

If provided, include only tunnels that were created (and not deleted) before this time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zero_trust_tunnel_cloudflared_route#existed_at DataCloudflareZeroTrustTunnelCloudflaredRoute#existed_at}

---

##### `IsDeleted`<sup>Optional</sup> <a name="IsDeleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilter.property.isDeleted"></a>

```go
IsDeleted interface{}
```

- *Type:* interface{}

If `true`, only include deleted routes. If `false`, exclude deleted routes. If empty, all routes will be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zero_trust_tunnel_cloudflared_route#is_deleted DataCloudflareZeroTrustTunnelCloudflaredRoute#is_deleted}

---

##### `NetworkSubset`<sup>Optional</sup> <a name="NetworkSubset" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilter.property.networkSubset"></a>

```go
NetworkSubset *string
```

- *Type:* *string

If set, only list routes that are contained within this IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zero_trust_tunnel_cloudflared_route#network_subset DataCloudflareZeroTrustTunnelCloudflaredRoute#network_subset}

---

##### `NetworkSuperset`<sup>Optional</sup> <a name="NetworkSuperset" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilter.property.networkSuperset"></a>

```go
NetworkSuperset *string
```

- *Type:* *string

If set, only list routes that contain this IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zero_trust_tunnel_cloudflared_route#network_superset DataCloudflareZeroTrustTunnelCloudflaredRoute#network_superset}

---

##### `RouteId`<sup>Optional</sup> <a name="RouteId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilter.property.routeId"></a>

```go
RouteId *string
```

- *Type:* *string

UUID of the route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zero_trust_tunnel_cloudflared_route#route_id DataCloudflareZeroTrustTunnelCloudflaredRoute#route_id}

---

##### `TunnelId`<sup>Optional</sup> <a name="TunnelId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilter.property.tunnelId"></a>

```go
TunnelId *string
```

- *Type:* *string

UUID of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zero_trust_tunnel_cloudflared_route#tunnel_id DataCloudflareZeroTrustTunnelCloudflaredRoute#tunnel_id}

---

##### `TunTypes`<sup>Optional</sup> <a name="TunTypes" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilter.property.tunTypes"></a>

```go
TunTypes *string
```

- *Type:* *string

The types of tunnels to filter separated by a comma.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zero_trust_tunnel_cloudflared_route#tun_types DataCloudflareZeroTrustTunnelCloudflaredRoute#tun_types}

---

##### `VirtualNetworkId`<sup>Optional</sup> <a name="VirtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilter.property.virtualNetworkId"></a>

```go
VirtualNetworkId *string
```

- *Type:* *string

UUID of the virtual network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/zero_trust_tunnel_cloudflared_route#virtual_network_id DataCloudflareZeroTrustTunnelCloudflaredRoute#virtual_network_id}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference <a name="DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/datacloudflarezerotrusttunnelcloudflaredroute"

datacloudflarezerotrusttunnelcloudflaredroute.NewDataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.resetExistedAt">ResetExistedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.resetIsDeleted">ResetIsDeleted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.resetNetworkSubset">ResetNetworkSubset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.resetNetworkSuperset">ResetNetworkSuperset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.resetRouteId">ResetRouteId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.resetTunnelId">ResetTunnelId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.resetTunTypes">ResetTunTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.resetVirtualNetworkId">ResetVirtualNetworkId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.resetComment"></a>

```go
func ResetComment()
```

##### `ResetExistedAt` <a name="ResetExistedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.resetExistedAt"></a>

```go
func ResetExistedAt()
```

##### `ResetIsDeleted` <a name="ResetIsDeleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.resetIsDeleted"></a>

```go
func ResetIsDeleted()
```

##### `ResetNetworkSubset` <a name="ResetNetworkSubset" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.resetNetworkSubset"></a>

```go
func ResetNetworkSubset()
```

##### `ResetNetworkSuperset` <a name="ResetNetworkSuperset" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.resetNetworkSuperset"></a>

```go
func ResetNetworkSuperset()
```

##### `ResetRouteId` <a name="ResetRouteId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.resetRouteId"></a>

```go
func ResetRouteId()
```

##### `ResetTunnelId` <a name="ResetTunnelId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.resetTunnelId"></a>

```go
func ResetTunnelId()
```

##### `ResetTunTypes` <a name="ResetTunTypes" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.resetTunTypes"></a>

```go
func ResetTunTypes()
```

##### `ResetVirtualNetworkId` <a name="ResetVirtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.resetVirtualNetworkId"></a>

```go
func ResetVirtualNetworkId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.property.existedAtInput">ExistedAtInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.property.isDeletedInput">IsDeletedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.property.networkSubsetInput">NetworkSubsetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.property.networkSupersetInput">NetworkSupersetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.property.routeIdInput">RouteIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.property.tunnelIdInput">TunnelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.property.tunTypesInput">TunTypesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.property.virtualNetworkIdInput">VirtualNetworkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.property.existedAt">ExistedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.property.isDeleted">IsDeleted</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.property.networkSubset">NetworkSubset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.property.networkSuperset">NetworkSuperset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.property.routeId">RouteId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.property.tunnelId">TunnelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.property.tunTypes">TunTypes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `ExistedAtInput`<sup>Optional</sup> <a name="ExistedAtInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.property.existedAtInput"></a>

```go
func ExistedAtInput() *string
```

- *Type:* *string

---

##### `IsDeletedInput`<sup>Optional</sup> <a name="IsDeletedInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.property.isDeletedInput"></a>

```go
func IsDeletedInput() interface{}
```

- *Type:* interface{}

---

##### `NetworkSubsetInput`<sup>Optional</sup> <a name="NetworkSubsetInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.property.networkSubsetInput"></a>

```go
func NetworkSubsetInput() *string
```

- *Type:* *string

---

##### `NetworkSupersetInput`<sup>Optional</sup> <a name="NetworkSupersetInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.property.networkSupersetInput"></a>

```go
func NetworkSupersetInput() *string
```

- *Type:* *string

---

##### `RouteIdInput`<sup>Optional</sup> <a name="RouteIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.property.routeIdInput"></a>

```go
func RouteIdInput() *string
```

- *Type:* *string

---

##### `TunnelIdInput`<sup>Optional</sup> <a name="TunnelIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.property.tunnelIdInput"></a>

```go
func TunnelIdInput() *string
```

- *Type:* *string

---

##### `TunTypesInput`<sup>Optional</sup> <a name="TunTypesInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.property.tunTypesInput"></a>

```go
func TunTypesInput() *string
```

- *Type:* *string

---

##### `VirtualNetworkIdInput`<sup>Optional</sup> <a name="VirtualNetworkIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.property.virtualNetworkIdInput"></a>

```go
func VirtualNetworkIdInput() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `ExistedAt`<sup>Required</sup> <a name="ExistedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.property.existedAt"></a>

```go
func ExistedAt() *string
```

- *Type:* *string

---

##### `IsDeleted`<sup>Required</sup> <a name="IsDeleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.property.isDeleted"></a>

```go
func IsDeleted() interface{}
```

- *Type:* interface{}

---

##### `NetworkSubset`<sup>Required</sup> <a name="NetworkSubset" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.property.networkSubset"></a>

```go
func NetworkSubset() *string
```

- *Type:* *string

---

##### `NetworkSuperset`<sup>Required</sup> <a name="NetworkSuperset" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.property.networkSuperset"></a>

```go
func NetworkSuperset() *string
```

- *Type:* *string

---

##### `RouteId`<sup>Required</sup> <a name="RouteId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.property.routeId"></a>

```go
func RouteId() *string
```

- *Type:* *string

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.property.tunnelId"></a>

```go
func TunnelId() *string
```

- *Type:* *string

---

##### `TunTypes`<sup>Required</sup> <a name="TunTypes" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.property.tunTypes"></a>

```go
func TunTypes() *string
```

- *Type:* *string

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.property.virtualNetworkId"></a>

```go
func VirtualNetworkId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoute.DataCloudflareZeroTrustTunnelCloudflaredRouteFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



