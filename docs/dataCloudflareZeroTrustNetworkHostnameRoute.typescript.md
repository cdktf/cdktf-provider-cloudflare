# `dataCloudflareZeroTrustNetworkHostnameRoute` Submodule <a name="`dataCloudflareZeroTrustNetworkHostnameRoute` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustNetworkHostnameRoute <a name="DataCloudflareZeroTrustNetworkHostnameRoute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_network_hostname_route cloudflare_zero_trust_network_hostname_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustNetworkHostnameRoute } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute(scope: Construct, id: string, config: DataCloudflareZeroTrustNetworkHostnameRouteConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig">DataCloudflareZeroTrustNetworkHostnameRouteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig">DataCloudflareZeroTrustNetworkHostnameRouteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.resetHostnameRouteId">resetHostnameRouteId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.putFilter"></a>

```typescript
public putFilter(value: DataCloudflareZeroTrustNetworkHostnameRouteFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter">DataCloudflareZeroTrustNetworkHostnameRouteFilter</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetHostnameRouteId` <a name="resetHostnameRouteId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.resetHostnameRouteId"></a>

```typescript
public resetHostnameRouteId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustNetworkHostnameRoute resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.isConstruct"></a>

```typescript
import { dataCloudflareZeroTrustNetworkHostnameRoute } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.isTerraformElement"></a>

```typescript
import { dataCloudflareZeroTrustNetworkHostnameRoute } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.isTerraformDataSource"></a>

```typescript
import { dataCloudflareZeroTrustNetworkHostnameRoute } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.generateConfigForImport"></a>

```typescript
import { dataCloudflareZeroTrustNetworkHostnameRoute } from '@cdktf/provider-cloudflare'

dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareZeroTrustNetworkHostnameRoute resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustNetworkHostnameRoute to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustNetworkHostnameRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_network_hostname_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustNetworkHostnameRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.deletedAt">deletedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference">DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.tunnelId">tunnelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.tunnelName">tunnelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter">DataCloudflareZeroTrustNetworkHostnameRouteFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.hostnameRouteIdInput">hostnameRouteIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.hostnameRouteId">hostnameRouteId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `deletedAt`<sup>Required</sup> <a name="deletedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.deletedAt"></a>

```typescript
public readonly deletedAt: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.filter"></a>

```typescript
public readonly filter: DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference">DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference</a>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.tunnelId"></a>

```typescript
public readonly tunnelId: string;
```

- *Type:* string

---

##### `tunnelName`<sup>Required</sup> <a name="tunnelName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.tunnelName"></a>

```typescript
public readonly tunnelName: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataCloudflareZeroTrustNetworkHostnameRouteFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter">DataCloudflareZeroTrustNetworkHostnameRouteFilter</a>

---

##### `hostnameRouteIdInput`<sup>Optional</sup> <a name="hostnameRouteIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.hostnameRouteIdInput"></a>

```typescript
public readonly hostnameRouteIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `hostnameRouteId`<sup>Required</sup> <a name="hostnameRouteId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.hostnameRouteId"></a>

```typescript
public readonly hostnameRouteId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustNetworkHostnameRouteConfig <a name="DataCloudflareZeroTrustNetworkHostnameRouteConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustNetworkHostnameRoute } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustNetworkHostnameRouteConfig: dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.accountId">accountId</a></code> | <code>string</code> | Cloudflare account ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter">DataCloudflareZeroTrustNetworkHostnameRouteFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_network_hostname_route#filter DataCloudflareZeroTrustNetworkHostnameRoute#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.hostnameRouteId">hostnameRouteId</a></code> | <code>string</code> | The hostname route ID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Cloudflare account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_network_hostname_route#account_id DataCloudflareZeroTrustNetworkHostnameRoute#account_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.filter"></a>

```typescript
public readonly filter: DataCloudflareZeroTrustNetworkHostnameRouteFilter;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter">DataCloudflareZeroTrustNetworkHostnameRouteFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_network_hostname_route#filter DataCloudflareZeroTrustNetworkHostnameRoute#filter}.

---

##### `hostnameRouteId`<sup>Optional</sup> <a name="hostnameRouteId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.hostnameRouteId"></a>

```typescript
public readonly hostnameRouteId: string;
```

- *Type:* string

The hostname route ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_network_hostname_route#hostname_route_id DataCloudflareZeroTrustNetworkHostnameRoute#hostname_route_id}

---

### DataCloudflareZeroTrustNetworkHostnameRouteFilter <a name="DataCloudflareZeroTrustNetworkHostnameRouteFilter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustNetworkHostnameRoute } from '@cdktf/provider-cloudflare'

const dataCloudflareZeroTrustNetworkHostnameRouteFilter: dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter.property.comment">comment</a></code> | <code>string</code> | If set, only list hostname routes with the given comment. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter.property.existedAt">existedAt</a></code> | <code>string</code> | If provided, include only resources that were created (and not deleted) before this time. URL encoded. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter.property.hostname">hostname</a></code> | <code>string</code> | If set, only list hostname routes that contain a substring of the given value, the filter is case-insensitive. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter.property.id">id</a></code> | <code>string</code> | The hostname route ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter.property.isDeleted">isDeleted</a></code> | <code>boolean \| cdktf.IResolvable</code> | If `true`, only return deleted hostname routes. If `false`, exclude deleted hostname routes. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter.property.tunnelId">tunnelId</a></code> | <code>string</code> | If set, only list hostname routes that point to a specific tunnel. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

If set, only list hostname routes with the given comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_network_hostname_route#comment DataCloudflareZeroTrustNetworkHostnameRoute#comment}

---

##### `existedAt`<sup>Optional</sup> <a name="existedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter.property.existedAt"></a>

```typescript
public readonly existedAt: string;
```

- *Type:* string

If provided, include only resources that were created (and not deleted) before this time. URL encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_network_hostname_route#existed_at DataCloudflareZeroTrustNetworkHostnameRoute#existed_at}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

If set, only list hostname routes that contain a substring of the given value, the filter is case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_network_hostname_route#hostname DataCloudflareZeroTrustNetworkHostnameRoute#hostname}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The hostname route ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_network_hostname_route#id DataCloudflareZeroTrustNetworkHostnameRoute#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isDeleted`<sup>Optional</sup> <a name="isDeleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter.property.isDeleted"></a>

```typescript
public readonly isDeleted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If `true`, only return deleted hostname routes. If `false`, exclude deleted hostname routes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_network_hostname_route#is_deleted DataCloudflareZeroTrustNetworkHostnameRoute#is_deleted}

---

##### `tunnelId`<sup>Optional</sup> <a name="tunnelId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter.property.tunnelId"></a>

```typescript
public readonly tunnelId: string;
```

- *Type:* string

If set, only list hostname routes that point to a specific tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_network_hostname_route#tunnel_id DataCloudflareZeroTrustNetworkHostnameRoute#tunnel_id}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference <a name="DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustNetworkHostnameRoute } from '@cdktf/provider-cloudflare'

new dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.resetExistedAt">resetExistedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.resetIsDeleted">resetIsDeleted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.resetTunnelId">resetTunnelId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComment` <a name="resetComment" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetExistedAt` <a name="resetExistedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.resetExistedAt"></a>

```typescript
public resetExistedAt(): void
```

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.resetHostname"></a>

```typescript
public resetHostname(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsDeleted` <a name="resetIsDeleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.resetIsDeleted"></a>

```typescript
public resetIsDeleted(): void
```

##### `resetTunnelId` <a name="resetTunnelId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.resetTunnelId"></a>

```typescript
public resetTunnelId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.existedAtInput">existedAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.isDeletedInput">isDeletedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.tunnelIdInput">tunnelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.existedAt">existedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.isDeleted">isDeleted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.tunnelId">tunnelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter">DataCloudflareZeroTrustNetworkHostnameRouteFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `existedAtInput`<sup>Optional</sup> <a name="existedAtInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.existedAtInput"></a>

```typescript
public readonly existedAtInput: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isDeletedInput`<sup>Optional</sup> <a name="isDeletedInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.isDeletedInput"></a>

```typescript
public readonly isDeletedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tunnelIdInput`<sup>Optional</sup> <a name="tunnelIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.tunnelIdInput"></a>

```typescript
public readonly tunnelIdInput: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `existedAt`<sup>Required</sup> <a name="existedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.existedAt"></a>

```typescript
public readonly existedAt: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isDeleted`<sup>Required</sup> <a name="isDeleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.isDeleted"></a>

```typescript
public readonly isDeleted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.tunnelId"></a>

```typescript
public readonly tunnelId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCloudflareZeroTrustNetworkHostnameRouteFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter">DataCloudflareZeroTrustNetworkHostnameRouteFilter</a>

---



