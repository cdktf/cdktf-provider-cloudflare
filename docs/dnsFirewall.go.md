# `dnsFirewall` Submodule <a name="`dnsFirewall` Submodule" id="@cdktf/provider-cloudflare.dnsFirewall"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsFirewall <a name="DnsFirewall" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/dns_firewall cloudflare_dns_firewall}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/dnsfirewall"

dnsfirewall.NewDnsFirewall(scope Construct, id *string, config DnsFirewallConfig) DnsFirewall
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig">DnsFirewallConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig">DnsFirewallConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.putAttackMitigation">PutAttackMitigation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetAttackMitigation">ResetAttackMitigation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetDeprecateAnyRequests">ResetDeprecateAnyRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetEcsFallback">ResetEcsFallback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetMaximumCacheTtl">ResetMaximumCacheTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetMinimumCacheTtl">ResetMinimumCacheTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetNegativeCacheTtl">ResetNegativeCacheTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetRatelimit">ResetRatelimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetRetries">ResetRetries</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAttackMitigation` <a name="PutAttackMitigation" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.putAttackMitigation"></a>

```go
func PutAttackMitigation(value DnsFirewallAttackMitigation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.putAttackMitigation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation">DnsFirewallAttackMitigation</a>

---

##### `ResetAttackMitigation` <a name="ResetAttackMitigation" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetAttackMitigation"></a>

```go
func ResetAttackMitigation()
```

##### `ResetDeprecateAnyRequests` <a name="ResetDeprecateAnyRequests" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetDeprecateAnyRequests"></a>

```go
func ResetDeprecateAnyRequests()
```

##### `ResetEcsFallback` <a name="ResetEcsFallback" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetEcsFallback"></a>

```go
func ResetEcsFallback()
```

##### `ResetMaximumCacheTtl` <a name="ResetMaximumCacheTtl" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetMaximumCacheTtl"></a>

```go
func ResetMaximumCacheTtl()
```

##### `ResetMinimumCacheTtl` <a name="ResetMinimumCacheTtl" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetMinimumCacheTtl"></a>

```go
func ResetMinimumCacheTtl()
```

##### `ResetNegativeCacheTtl` <a name="ResetNegativeCacheTtl" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetNegativeCacheTtl"></a>

```go
func ResetNegativeCacheTtl()
```

##### `ResetRatelimit` <a name="ResetRatelimit" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetRatelimit"></a>

```go
func ResetRatelimit()
```

##### `ResetRetries` <a name="ResetRetries" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetRetries"></a>

```go
func ResetRetries()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DnsFirewall resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/dnsfirewall"

dnsfirewall.DnsFirewall_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/dnsfirewall"

dnsfirewall.DnsFirewall_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/dnsfirewall"

dnsfirewall.DnsFirewall_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/dnsfirewall"

dnsfirewall.DnsFirewall_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DnsFirewall resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DnsFirewall to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DnsFirewall that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/dns_firewall#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DnsFirewall to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.attackMitigation">AttackMitigation</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference">DnsFirewallAttackMitigationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.dnsFirewallIps">DnsFirewallIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.modifiedOn">ModifiedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.attackMitigationInput">AttackMitigationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.deprecateAnyRequestsInput">DeprecateAnyRequestsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.ecsFallbackInput">EcsFallbackInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.maximumCacheTtlInput">MaximumCacheTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.minimumCacheTtlInput">MinimumCacheTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.negativeCacheTtlInput">NegativeCacheTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.ratelimitInput">RatelimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.retriesInput">RetriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.upstreamIpsInput">UpstreamIpsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.deprecateAnyRequests">DeprecateAnyRequests</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.ecsFallback">EcsFallback</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.maximumCacheTtl">MaximumCacheTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.minimumCacheTtl">MinimumCacheTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.negativeCacheTtl">NegativeCacheTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.ratelimit">Ratelimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.retries">Retries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.upstreamIps">UpstreamIps</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AttackMitigation`<sup>Required</sup> <a name="AttackMitigation" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.attackMitigation"></a>

```go
func AttackMitigation() DnsFirewallAttackMitigationOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference">DnsFirewallAttackMitigationOutputReference</a>

---

##### `DnsFirewallIps`<sup>Required</sup> <a name="DnsFirewallIps" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.dnsFirewallIps"></a>

```go
func DnsFirewallIps() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.modifiedOn"></a>

```go
func ModifiedOn() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AttackMitigationInput`<sup>Optional</sup> <a name="AttackMitigationInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.attackMitigationInput"></a>

```go
func AttackMitigationInput() interface{}
```

- *Type:* interface{}

---

##### `DeprecateAnyRequestsInput`<sup>Optional</sup> <a name="DeprecateAnyRequestsInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.deprecateAnyRequestsInput"></a>

```go
func DeprecateAnyRequestsInput() interface{}
```

- *Type:* interface{}

---

##### `EcsFallbackInput`<sup>Optional</sup> <a name="EcsFallbackInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.ecsFallbackInput"></a>

```go
func EcsFallbackInput() interface{}
```

- *Type:* interface{}

---

##### `MaximumCacheTtlInput`<sup>Optional</sup> <a name="MaximumCacheTtlInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.maximumCacheTtlInput"></a>

```go
func MaximumCacheTtlInput() *f64
```

- *Type:* *f64

---

##### `MinimumCacheTtlInput`<sup>Optional</sup> <a name="MinimumCacheTtlInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.minimumCacheTtlInput"></a>

```go
func MinimumCacheTtlInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NegativeCacheTtlInput`<sup>Optional</sup> <a name="NegativeCacheTtlInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.negativeCacheTtlInput"></a>

```go
func NegativeCacheTtlInput() *f64
```

- *Type:* *f64

---

##### `RatelimitInput`<sup>Optional</sup> <a name="RatelimitInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.ratelimitInput"></a>

```go
func RatelimitInput() *f64
```

- *Type:* *f64

---

##### `RetriesInput`<sup>Optional</sup> <a name="RetriesInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.retriesInput"></a>

```go
func RetriesInput() *f64
```

- *Type:* *f64

---

##### `UpstreamIpsInput`<sup>Optional</sup> <a name="UpstreamIpsInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.upstreamIpsInput"></a>

```go
func UpstreamIpsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `DeprecateAnyRequests`<sup>Required</sup> <a name="DeprecateAnyRequests" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.deprecateAnyRequests"></a>

```go
func DeprecateAnyRequests() interface{}
```

- *Type:* interface{}

---

##### `EcsFallback`<sup>Required</sup> <a name="EcsFallback" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.ecsFallback"></a>

```go
func EcsFallback() interface{}
```

- *Type:* interface{}

---

##### `MaximumCacheTtl`<sup>Required</sup> <a name="MaximumCacheTtl" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.maximumCacheTtl"></a>

```go
func MaximumCacheTtl() *f64
```

- *Type:* *f64

---

##### `MinimumCacheTtl`<sup>Required</sup> <a name="MinimumCacheTtl" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.minimumCacheTtl"></a>

```go
func MinimumCacheTtl() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NegativeCacheTtl`<sup>Required</sup> <a name="NegativeCacheTtl" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.negativeCacheTtl"></a>

```go
func NegativeCacheTtl() *f64
```

- *Type:* *f64

---

##### `Ratelimit`<sup>Required</sup> <a name="Ratelimit" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.ratelimit"></a>

```go
func Ratelimit() *f64
```

- *Type:* *f64

---

##### `Retries`<sup>Required</sup> <a name="Retries" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.retries"></a>

```go
func Retries() *f64
```

- *Type:* *f64

---

##### `UpstreamIps`<sup>Required</sup> <a name="UpstreamIps" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.upstreamIps"></a>

```go
func UpstreamIps() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DnsFirewallAttackMitigation <a name="DnsFirewallAttackMitigation" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/dnsfirewall"

&dnsfirewall.DnsFirewallAttackMitigation {
	Enabled: interface{},
	OnlyWhenUpstreamUnhealthy: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation.property.enabled">Enabled</a></code> | <code>interface{}</code> | When enabled, automatically mitigate random-prefix attacks to protect upstream DNS servers. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation.property.onlyWhenUpstreamUnhealthy">OnlyWhenUpstreamUnhealthy</a></code> | <code>interface{}</code> | Only mitigate attacks when upstream servers seem unhealthy. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

When enabled, automatically mitigate random-prefix attacks to protect upstream DNS servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/dns_firewall#enabled DnsFirewall#enabled}

---

##### `OnlyWhenUpstreamUnhealthy`<sup>Optional</sup> <a name="OnlyWhenUpstreamUnhealthy" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation.property.onlyWhenUpstreamUnhealthy"></a>

```go
OnlyWhenUpstreamUnhealthy interface{}
```

- *Type:* interface{}

Only mitigate attacks when upstream servers seem unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/dns_firewall#only_when_upstream_unhealthy DnsFirewall#only_when_upstream_unhealthy}

---

### DnsFirewallConfig <a name="DnsFirewallConfig" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/dnsfirewall"

&dnsfirewall.DnsFirewallConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Name: *string,
	UpstreamIps: *[]*string,
	AttackMitigation: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13.dnsFirewall.DnsFirewallAttackMitigation,
	DeprecateAnyRequests: interface{},
	EcsFallback: interface{},
	MaximumCacheTtl: *f64,
	MinimumCacheTtl: *f64,
	NegativeCacheTtl: *f64,
	Ratelimit: *f64,
	Retries: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.name">Name</a></code> | <code>*string</code> | DNS Firewall cluster name. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.upstreamIps">UpstreamIps</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/dns_firewall#upstream_ips DnsFirewall#upstream_ips}. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.attackMitigation">AttackMitigation</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation">DnsFirewallAttackMitigation</a></code> | Attack mitigation settings. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.deprecateAnyRequests">DeprecateAnyRequests</a></code> | <code>interface{}</code> | Whether to refuse to answer queries for the ANY type. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.ecsFallback">EcsFallback</a></code> | <code>interface{}</code> | Whether to forward client IP (resolver) subnet if no EDNS Client Subnet is sent. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.maximumCacheTtl">MaximumCacheTtl</a></code> | <code>*f64</code> | By default, Cloudflare attempts to cache responses for as long as indicated by the TTL received from upstream nameservers. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.minimumCacheTtl">MinimumCacheTtl</a></code> | <code>*f64</code> | By default, Cloudflare attempts to cache responses for as long as indicated by the TTL received from upstream nameservers. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.negativeCacheTtl">NegativeCacheTtl</a></code> | <code>*f64</code> | This setting controls how long DNS Firewall should cache negative responses (e.g., NXDOMAIN) from the upstream servers. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.ratelimit">Ratelimit</a></code> | <code>*f64</code> | Ratelimit in queries per second per datacenter (applies to DNS queries sent to the upstream nameservers configured on the cluster). |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.retries">Retries</a></code> | <code>*f64</code> | Number of retries for fetching DNS responses from upstream nameservers (not counting the initial attempt). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/dns_firewall#account_id DnsFirewall#account_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

DNS Firewall cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/dns_firewall#name DnsFirewall#name}

---

##### `UpstreamIps`<sup>Required</sup> <a name="UpstreamIps" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.upstreamIps"></a>

```go
UpstreamIps *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/dns_firewall#upstream_ips DnsFirewall#upstream_ips}.

---

##### `AttackMitigation`<sup>Optional</sup> <a name="AttackMitigation" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.attackMitigation"></a>

```go
AttackMitigation DnsFirewallAttackMitigation
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation">DnsFirewallAttackMitigation</a>

Attack mitigation settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/dns_firewall#attack_mitigation DnsFirewall#attack_mitigation}

---

##### `DeprecateAnyRequests`<sup>Optional</sup> <a name="DeprecateAnyRequests" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.deprecateAnyRequests"></a>

```go
DeprecateAnyRequests interface{}
```

- *Type:* interface{}

Whether to refuse to answer queries for the ANY type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/dns_firewall#deprecate_any_requests DnsFirewall#deprecate_any_requests}

---

##### `EcsFallback`<sup>Optional</sup> <a name="EcsFallback" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.ecsFallback"></a>

```go
EcsFallback interface{}
```

- *Type:* interface{}

Whether to forward client IP (resolver) subnet if no EDNS Client Subnet is sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/dns_firewall#ecs_fallback DnsFirewall#ecs_fallback}

---

##### `MaximumCacheTtl`<sup>Optional</sup> <a name="MaximumCacheTtl" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.maximumCacheTtl"></a>

```go
MaximumCacheTtl *f64
```

- *Type:* *f64

By default, Cloudflare attempts to cache responses for as long as indicated by the TTL received from upstream nameservers.

This setting
sets an upper bound on this duration. For caching purposes, higher TTLs
will be decreased to the maximum value defined by this setting.

This setting does not affect the TTL value in the DNS response
Cloudflare returns to clients. Cloudflare will always forward the TTL
value received from upstream nameservers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/dns_firewall#maximum_cache_ttl DnsFirewall#maximum_cache_ttl}

---

##### `MinimumCacheTtl`<sup>Optional</sup> <a name="MinimumCacheTtl" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.minimumCacheTtl"></a>

```go
MinimumCacheTtl *f64
```

- *Type:* *f64

By default, Cloudflare attempts to cache responses for as long as indicated by the TTL received from upstream nameservers.

This setting
sets a lower bound on this duration. For caching purposes, lower TTLs
will be increased to the minimum value defined by this setting.

This setting does not affect the TTL value in the DNS response
Cloudflare returns to clients. Cloudflare will always forward the TTL
value received from upstream nameservers.

Note that, even with this setting, there is no guarantee that a
response will be cached for at least the specified duration. Cached
responses may be removed earlier for capacity or other operational
reasons.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/dns_firewall#minimum_cache_ttl DnsFirewall#minimum_cache_ttl}

---

##### `NegativeCacheTtl`<sup>Optional</sup> <a name="NegativeCacheTtl" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.negativeCacheTtl"></a>

```go
NegativeCacheTtl *f64
```

- *Type:* *f64

This setting controls how long DNS Firewall should cache negative responses (e.g., NXDOMAIN) from the upstream servers.

This setting does not affect the TTL value in the DNS response
Cloudflare returns to clients. Cloudflare will always forward the TTL
value received from upstream nameservers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/dns_firewall#negative_cache_ttl DnsFirewall#negative_cache_ttl}

---

##### `Ratelimit`<sup>Optional</sup> <a name="Ratelimit" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.ratelimit"></a>

```go
Ratelimit *f64
```

- *Type:* *f64

Ratelimit in queries per second per datacenter (applies to DNS queries sent to the upstream nameservers configured on the cluster).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/dns_firewall#ratelimit DnsFirewall#ratelimit}

---

##### `Retries`<sup>Optional</sup> <a name="Retries" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.retries"></a>

```go
Retries *f64
```

- *Type:* *f64

Number of retries for fetching DNS responses from upstream nameservers (not counting the initial attempt).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/dns_firewall#retries DnsFirewall#retries}

---

## Classes <a name="Classes" id="Classes"></a>

### DnsFirewallAttackMitigationOutputReference <a name="DnsFirewallAttackMitigationOutputReference" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/dnsfirewall"

dnsfirewall.NewDnsFirewallAttackMitigationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DnsFirewallAttackMitigationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.resetOnlyWhenUpstreamUnhealthy">ResetOnlyWhenUpstreamUnhealthy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetOnlyWhenUpstreamUnhealthy` <a name="ResetOnlyWhenUpstreamUnhealthy" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.resetOnlyWhenUpstreamUnhealthy"></a>

```go
func ResetOnlyWhenUpstreamUnhealthy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.onlyWhenUpstreamUnhealthyInput">OnlyWhenUpstreamUnhealthyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.onlyWhenUpstreamUnhealthy">OnlyWhenUpstreamUnhealthy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `OnlyWhenUpstreamUnhealthyInput`<sup>Optional</sup> <a name="OnlyWhenUpstreamUnhealthyInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.onlyWhenUpstreamUnhealthyInput"></a>

```go
func OnlyWhenUpstreamUnhealthyInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `OnlyWhenUpstreamUnhealthy`<sup>Required</sup> <a name="OnlyWhenUpstreamUnhealthy" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.onlyWhenUpstreamUnhealthy"></a>

```go
func OnlyWhenUpstreamUnhealthy() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



