# `dataCloudflareEmailRoutingCatchAll` Submodule <a name="`dataCloudflareEmailRoutingCatchAll` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareEmailRoutingCatchAll <a name="DataCloudflareEmailRoutingCatchAll" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/email_routing_catch_all cloudflare_email_routing_catch_all}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.Initializer"></a>

```typescript
import { dataCloudflareEmailRoutingCatchAll } from '@cdktf/provider-cloudflare'

new dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll(scope: Construct, id: string, config: DataCloudflareEmailRoutingCatchAllConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllConfig">DataCloudflareEmailRoutingCatchAllConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllConfig">DataCloudflareEmailRoutingCatchAllConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareEmailRoutingCatchAll resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.isConstruct"></a>

```typescript
import { dataCloudflareEmailRoutingCatchAll } from '@cdktf/provider-cloudflare'

dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.isTerraformElement"></a>

```typescript
import { dataCloudflareEmailRoutingCatchAll } from '@cdktf/provider-cloudflare'

dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.isTerraformDataSource"></a>

```typescript
import { dataCloudflareEmailRoutingCatchAll } from '@cdktf/provider-cloudflare'

dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.generateConfigForImport"></a>

```typescript
import { dataCloudflareEmailRoutingCatchAll } from '@cdktf/provider-cloudflare'

dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareEmailRoutingCatchAll resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareEmailRoutingCatchAll to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareEmailRoutingCatchAll that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/email_routing_catch_all#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareEmailRoutingCatchAll to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.property.actions">actions</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsList">DataCloudflareEmailRoutingCatchAllActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.property.matchers">matchers</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersList">DataCloudflareEmailRoutingCatchAllMatchersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.property.tag">tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.property.actions"></a>

```typescript
public readonly actions: DataCloudflareEmailRoutingCatchAllActionsList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsList">DataCloudflareEmailRoutingCatchAllActionsList</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `matchers`<sup>Required</sup> <a name="matchers" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.property.matchers"></a>

```typescript
public readonly matchers: DataCloudflareEmailRoutingCatchAllMatchersList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersList">DataCloudflareEmailRoutingCatchAllMatchersList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAll.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareEmailRoutingCatchAllActions <a name="DataCloudflareEmailRoutingCatchAllActions" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActions.Initializer"></a>

```typescript
import { dataCloudflareEmailRoutingCatchAll } from '@cdktf/provider-cloudflare'

const dataCloudflareEmailRoutingCatchAllActions: dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActions = { ... }
```


### DataCloudflareEmailRoutingCatchAllConfig <a name="DataCloudflareEmailRoutingCatchAllConfig" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllConfig.Initializer"></a>

```typescript
import { dataCloudflareEmailRoutingCatchAll } from '@cdktf/provider-cloudflare'

const dataCloudflareEmailRoutingCatchAllConfig: dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/email_routing_catch_all#zone_id DataCloudflareEmailRoutingCatchAll#zone_id}

---

### DataCloudflareEmailRoutingCatchAllMatchers <a name="DataCloudflareEmailRoutingCatchAllMatchers" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchers.Initializer"></a>

```typescript
import { dataCloudflareEmailRoutingCatchAll } from '@cdktf/provider-cloudflare'

const dataCloudflareEmailRoutingCatchAllMatchers: dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchers = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareEmailRoutingCatchAllActionsList <a name="DataCloudflareEmailRoutingCatchAllActionsList" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsList.Initializer"></a>

```typescript
import { dataCloudflareEmailRoutingCatchAll } from '@cdktf/provider-cloudflare'

new dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsList.get"></a>

```typescript
public get(index: number): DataCloudflareEmailRoutingCatchAllActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareEmailRoutingCatchAllActionsOutputReference <a name="DataCloudflareEmailRoutingCatchAllActionsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareEmailRoutingCatchAll } from '@cdktf/provider-cloudflare'

new dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.property.value">value</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActions">DataCloudflareEmailRoutingCatchAllActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.property.value"></a>

```typescript
public readonly value: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareEmailRoutingCatchAllActions;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllActions">DataCloudflareEmailRoutingCatchAllActions</a>

---


### DataCloudflareEmailRoutingCatchAllMatchersList <a name="DataCloudflareEmailRoutingCatchAllMatchersList" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersList.Initializer"></a>

```typescript
import { dataCloudflareEmailRoutingCatchAll } from '@cdktf/provider-cloudflare'

new dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersList.get"></a>

```typescript
public get(index: number): DataCloudflareEmailRoutingCatchAllMatchersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareEmailRoutingCatchAllMatchersOutputReference <a name="DataCloudflareEmailRoutingCatchAllMatchersOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.Initializer"></a>

```typescript
import { dataCloudflareEmailRoutingCatchAll } from '@cdktf/provider-cloudflare'

new dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchers">DataCloudflareEmailRoutingCatchAllMatchers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareEmailRoutingCatchAllMatchers;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailRoutingCatchAll.DataCloudflareEmailRoutingCatchAllMatchers">DataCloudflareEmailRoutingCatchAllMatchers</a>

---



